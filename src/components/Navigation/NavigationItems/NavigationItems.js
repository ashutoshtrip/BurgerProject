import React from 'react'
import NavigationItem from './NavigationItem/NavigationItem';
import "./NavigationItems.css";

const NavigationItems = ()=> (
    <ul className="NavigationItems">
        <NavigationItem  link="/" active> BURGER BUILDER </NavigationItem>
        <NavigationItem  link="/" active={false}> CHECKOUT </NavigationItem>
    </ul>
)
   

export default NavigationItems
