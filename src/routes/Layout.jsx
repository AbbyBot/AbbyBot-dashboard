import React, { useContext, useEffect } from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

export default function Layout() {
    const { authenticate}  = useContext(AuthContext)
    
    useEffect (() => {
        authenticate()
    }, [])
    

    return (
        <main className='d-flex flex-column vh100'>
            <Header />
            <Outlet />
        </main>
    )
}
