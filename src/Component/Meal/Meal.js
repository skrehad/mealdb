import React from 'react';
import './Meal.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShop } from '@fortawesome/free-solid-svg-icons'

  const element = <FontAwesomeIcon icon={faShop} />

const Meal = (props) => {
    // console.log(props)
    const {strMeal,strInstructions,strMealThumb}=props.meal
    return (
        <div className='foods'>
            <img src={strMealThumb} alt="" />
            <div className='foodDesign'>
            <h1>Name: {strMeal}</h1>
            <p>description: {strInstructions.slice(0,300)}</p>
            </div>
            <button onClick={()=>props.addToCart(props)}> {element} Add To Cart</button>
        </div>
    );
};

export default Meal;