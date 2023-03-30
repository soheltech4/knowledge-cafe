import React from 'react';

const Nav = () => {
    return (
        <div className='container mx-auto flex justify-between items-center p-5 mt-5 mb-5'>
            <h1 className='text-3xl semibold'>KNOWLEDGE HOUSE</h1>
            <img className='h-20 w-20 rounded-full' src="../../../public/person.jpg" alt="" />
        </div>
    );
};

export default Nav;