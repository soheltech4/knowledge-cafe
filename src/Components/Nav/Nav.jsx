import React from 'react';

const Nav = () => {
    return (
        <div className='container mx-auto p-5'>
            <div className='flex justify-between items-center p-5 mt-5 mb-5 bg-blue-50 rounded'>
                <h1 className='text-4xl semibold'>KNOWLEDGE HOUSE</h1>
                <img className='h-20 w-20 rounded-full' src="https://yt3.googleusercontent.com/ytc/AL5GRJXm4Uze1PKycmrMhkAwiN8XqA7mlqS6BYRDlLVx=s900-c-k-c0x00ffffff-no-rj" alt="" />
            </div>
        </div>
    );
};

export default Nav;