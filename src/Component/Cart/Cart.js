import React from 'react';
import List from '../List/List';
import './Cart.css'

const Cart = (props) => {
    const {cart}=props
    // console.log(props.cart)
    return (
        <div className='cart'>
            <h1>Food Name</h1>
            {
               cart.map(name => <List name={name}></List>)
            }
        </div>
    );
};

export default Cart;