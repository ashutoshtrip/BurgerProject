import React, {useState} from 'react';
import Aux from "../../hoc/Aux"
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import  "./Layout.css"
const Layout = (props)=>
{
      const [sideDrawer , setSideDrawer] = useState(false)
      
      const  sideDrawerHandler = () =>
      {

          setSideDrawer(false);
       
         
      }
      const sideOpenHandler = ()=>

      {
          setSideDrawer(true);

      }
  return(
    <Aux >
    <Toolbar open = {sideOpenHandler}/>
    <SideDrawer  open = {sideDrawer} closed={sideDrawerHandler} />
    <main className= "Content">
     {props.children}
    </main>
    </Aux>);
}

export default Layout;