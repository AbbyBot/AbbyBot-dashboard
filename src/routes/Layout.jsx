import React, { useContext, useEffect } from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import Init from '../components/Init'

export default function Layout() {
    const { authenticate, loading }  = useContext(AuthContext)
    
    useEffect (() => {
        authenticate()
    }, [])
    
    useEffect(() => {
        console.log(loading)
    }, [loading])

    if (loading) {
        return <Init/>
    }

    return (
        <main className='d-flex flex-column vh100'>
            <Header />
            <Outlet />
        </main>
    )
}
