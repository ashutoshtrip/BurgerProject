import React from 'react';
import classes from './Burger.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'
const Burger = (props) =>
{

  let transformedIngredients = Object.keys(props.ingredients)  //[salad , bacon , cheese]
  .map(igKey => {
    return [...Array(props.ingredients[igKey])].map((_, i)=> //[empty array with size of ingredients count]
    {
   
     return  <BurgerIngredient key = {igKey + i} type = { igKey} /> // return the JSX for ingredient: count times
    });
  }).reduce( (arr , el)=>
  {
    return arr.concat(el)
  }, [])
  console.log(transformedIngredients)
 if(transformedIngredients.length === 0)
 {
   transformedIngredients = <p> Please add something</p>
 }
    return (
        <div className= "Burger">
      <BurgerIngredient type="bread-top"/>
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom"/>
  
        </div>
    );

}
export default Burger;