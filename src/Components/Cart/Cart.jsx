import React from 'react';

const Cart = (props) => {
    const {title} = props.cart
    return (
        <div className='text-center font-semibold text-lg mb-5 border bg-blue-100 rounded p-3'>
            <h1>{title}</h1>
        </div>
    );
};

export default Cart;