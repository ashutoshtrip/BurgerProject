import React from 'react';
import Aux from '../../../hoc/Aux'
import Logo from '../../Logo/Logo'
import Backdrop from '../../UI/Backdrop/Backdrop';
import NavigationItems from '../NavigationItems/NavigationItems';
import "./SideDrawer.css";

const  SideDrawer = (props)=>
{
     
    return (
        <Aux>
            <Backdrop show= {props.open} clicked = {props.closed} />
        <div className={props.open ? "SideDrawer Open" : "SideDrawer Close"} >
            
            <Logo height = "11%" style={{marginBottom : 32}} />
            <nav>
                <NavigationItems/>
            </nav>

        </div>
        </Aux>
    );
}

export default SideDrawer;
