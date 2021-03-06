import React, {useState, Component} from 'react'
import Aux from '../../hoc/Aux'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from "../../axios-orders";

const ingredient_prices = {

    salad : 0.5,
    cheese : 0.4,
    meat : 1.3,
    bacon : 0.7
};

class BurgerBuilder extends Component {
    state = {
        ingredients:{
            salad : 0,
            bacon :0 ,
            cheese : 0,
            meat: 0
        },
        totalPrice : 4,
        purchasable : false,
        purchasing : false
    }

    updatePurchasable (ingredients)
    {
       
        const sum = Object.keys(ingredients).map(igKey =>{
            return ingredients[igKey];
        }).reduce((sum , el) =>{
            return sum +el;

        },0);

       this.setState({purchasable: sum > 0})
    }

     purchaseHandler = ()=>
     {
         this.setState({purchasing : true});
     }
     purchaseCancel = ()=>
     {
      this.setState({purchasing : false})
     }

     purchaseContinue =()=>
     {
         const order = {
             ingredients: this.state.ingredients,
             price : this.state.totalPrice,
             customer: {
                 name:'Ashutosh',
                 address: {
                     street: 'Teststreet 1',
                     zipcode : '41343'
                 }
             }
         }
         axios.post('/orders.json', order).then(response=>{
             console.log(response);
         }).catch(error=>{
             console.log(error);
         });

     }
    addIngredientHandler = (type) =>
    {
        const oldCount = this.state.ingredients[type];
        const updatedCounted  = oldCount + 1;
        const updatedIngredients =  {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCounted;
        const priceAddition = ingredient_prices[type];
        const oldPrice = this.state.totalPrice ;
        const newPrice = oldPrice + priceAddition;
        this.setState({
            totalPrice: newPrice , ingredients : updatedIngredients
        })
        this.updatePurchasable(updatedIngredients);
        
        
    }
    removeIngredientHandler = (type) =>
    {
       
        const oldCount = this.state.ingredients[type];
        if(oldCount !== 0)
        {

        
        const updatedCounted  = oldCount - 1;
        const updatedIngredients =  {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCounted;
        const priceAddition = ingredient_prices[type];
        const oldPrice = this.state.totalPrice ;
        const newPrice = oldPrice - priceAddition;
        this.setState({
            totalPrice: newPrice , ingredients : updatedIngredients
        })
        this.updatePurchasable(updatedIngredients);
    }

     }
    
    render() {
    {
          const disabledInfo = {
              ...this.state.ingredients
          };
          
          for(let key in disabledInfo)
          {
              disabledInfo[key] = disabledInfo[key] <=0
          }
        return (
            <Aux>
                <Modal show = {this.state.purchasing} modalClosed ={this.purchaseCancel} > 
                    <OrderSummary ingredients = {this.state.ingredients}
                     continue = {this.purchaseContinue}
                     cancel = {this.purchaseCancel}
                     price = {this.state.totalPrice}/>
                </Modal>
                <Burger ingredients = {this.state.ingredients}/>
                <BuildControls 
                   ingredientsAdded = {this.addIngredientHandler}
                   ingredientremoved = {this.removeIngredientHandler} 
                   disabled = {disabledInfo}
                   price = {this.state.totalPrice} 
                   purchasable= {this.state.purchasable}
                   ordered = {this.purchaseHandler}
                   /> 
            </Aux>
        );
    }
}
}
export default BurgerBuilder;
