import React from 'react'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle'
import "./Toolbar.css"

const Toolbar =(props)=> {
    return (
        <header className="Toolbar">
            <div onClick={props.open}> <DrawerToggle/> </div>
            <Logo height = "80%" />
            <nav className="DesktopOnly"> 
               <NavigationItems/>
            
            </nav>
        </header>
    )
}

export default Toolbar
