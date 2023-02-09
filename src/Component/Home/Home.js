import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Cart from '../Cart/Cart';
import Meal from '../Meal/Meal';
import './Home.css'

const Home = () => {

    const [meals,setMeals]=useState([])
    const [cart,setCart] = useState([])
  
  useEffect(()=>{
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=a')
    .then(res=>res.json())
    .then(data=>setMeals(data.meals))
  },[])

  const addToCart= meal =>{
    const newCart = [...cart, meal]
    setCart(newCart)
  }

    return (
    
     <div className='container'>

        <div className='meals'>
           
           {
             meals.map(meal => <Meal
                meal={meal}
                addToCart={addToCart}
                key={meal.idMeal}
                ></Meal>)
           }
       </div>
         
       <div>
         <Cart cart={cart}></Cart> 
       </div>


     </div>
    );
};

export default Home;