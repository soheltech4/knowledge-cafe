import React, {useEffect, useState} from 'react';
import Show from '../Show/Show';

const Display = () => {
    const [Datas, setDatas] = useState([])
    useEffect(()=>{
        fetch('program.json')
        .then(res => res.json())
        .then(data => setDatas(data))
    },[])
    console.log(Datas)
    return (
        <>
            <div className='container mx-auto grid md:grid-cols-2'>
                <div className="DisplayContainer">
                    {
                        Datas.map(data => <Show data={data} key={data.id}></Show>)
                    }
                </div>
                <div className="CartContainer">
                    <h1>Programmer Cart</h1>
                </div>
            </div>
        </>
    );
};

export default Display;