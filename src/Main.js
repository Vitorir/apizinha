import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Layout from './components/Layout'
import Eventos from './Pages/Eventos'
import EventDetail from './Pages/EventDetail'

function Main() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/Eventos" element={<Eventos />} />
        <Route path="/Eventos/:idCurso" element={<EventDetail />} />
      </Route>
    </Routes>
  </BrowserRouter>
  )
}

export default Main