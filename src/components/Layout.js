import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
        <nav>
            <ul>
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'/eventos'}>Eventos</Link></li>
            </ul>
        </nav>

        <Outlet/>
    </>
  )
}

export default Layout