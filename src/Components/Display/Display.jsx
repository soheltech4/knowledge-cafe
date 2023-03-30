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
            <div className='container mx-auto md:flex gap-40'>
                <div className=" p-5 w-3/3">
                    {
                        Datas.map(data => <Show data={data} key={data.id}></Show>)
                    }
                </div>
                <div className="bg-yellow-500 p-5 md:w-1/3">
                    <h1>Programmer Cart</h1>
                </div>
            </div>
        </>
    );
};

export default Display;