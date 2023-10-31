import React from 'react'
import Sidebar from '../Components/Sidebar'
import { Outlet } from 'react-router-dom'
import Header from '../Components/Header'
import './Layout.css'

export default function Layout() {
    return (
        <>
            <div className="layout-container">
                <Sidebar />
                <div className='main'>
                    <Header/>
                    <Outlet />
                </div>
            </div>
        </>
    )
}
