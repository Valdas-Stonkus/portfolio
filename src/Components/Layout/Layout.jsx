import React from 'react'
import { Outlet } from 'react-router-dom'
// import Header from '../Header'
// import Footer from '../Footer'
import '../../styles/Layout.scss'

const Layout = () => (
    <div className="layout">
        {/* <Header /> */}
        <div className="layout__content">
            <Outlet />
            {/* <Footer /> */}
        </div>
    </div>
)

export default Layout
