import React, { useState } from 'react';

const Duration = (props) => {
    return (
        <div className='text-center font-semibold text-2xl mb-5 border bg-slate-200 rounded p-3'>
            <h1>Spent time on read : {props.time} min</h1>
        </div>
    );
};

export default Duration;