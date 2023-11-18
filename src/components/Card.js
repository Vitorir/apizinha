import React from 'react'
import { useNavigate } from 'react-router-dom'

function Card({id, fotos, nome}) {

    const navigate = useNavigate()

    return (
    <div>
        <img src={fotos[0].src} />
        <h1>{nome}</h1>
        <button onClick={() => {
            navigate(`${id}`)
        }}>Ver mais</button>
    </div>
  )
}

export default Card