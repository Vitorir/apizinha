import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function EventDetail() {
    const [ curso, setCurso] = useState({
        nome: "",
        fotos: [],
        duracao: "",
        descricao: ""
    })

    let { idCurso } = useParams()

    async function getEvent() {
        let req = await fetch(`http://localhost:3001/${idCurso}`)
        let res = await req.json()

        setCurso(res)
    }

    useEffect(() => {
        getEvent()
    })

  return (
    <div>
        <h1>Detalhes do evento</h1>
        <h2>{curso.nome}</h2>
        <img src={curso.fotos.length > 0 ? curso.fotos[0].src : ""} />
        <p>{curso.duracao}</p>
        <p>{curso.descricao}</p>
    </div>
  )
}

export default EventDetail