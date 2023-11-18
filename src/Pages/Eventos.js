import React from 'react'
import { useNavigate } from 'react-router-dom'

function Eventos() {

    const navigate = useNavigate()

    function moverCurso(e) {
        navigate(`/eventos/${e.target.innerHTML}`)
    }

  return (
    <>
        <button onClick={moverCurso}>programacao</button>
        <button onClick={moverCurso}>data</button>
    </>
  )
}

export default Eventos