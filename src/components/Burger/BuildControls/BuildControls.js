import React from 'react';
import "./BuildControls.css"
import BuildControl from './BuildControl/BuildControl'
const controls = [
    {label : 'Salad' , type  : 'salad'},
    {label : 'Bacon' , type : 'bacon'},
    {label : 'Cheese ' , type  : 'cheese'},
    {label : 'Meat' , type : 'meat'}
];

const BuildControls = (props) =>
{
    return (
   
   <div className="BuildControls">
       <p> Current Price = <strong>  {props.price.toFixed(2)}</strong></p>
    {
    controls.map((cntrl) => (
            <BuildControl key={cntrl.label} 
            label={cntrl.label}
            added = {()=> props.ingredientsAdded(cntrl.type)}
            removed = {()=> props.ingredientremoved(cntrl.type)}
            disabled = { props.disabled[cntrl.type]}

            />
        ) )}
        <button className= "OrderButton"
        disabled={!props.purchasable}
        onClick={props.ordered}> ORDER NOW </button>
   </div>
   
   );
}
export default BuildControls;