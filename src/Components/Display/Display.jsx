import React, {useEffect, useState} from 'react';
import Cart from '../Cart/Cart';
import Duration from '../Duration/Duration';
import Show from '../Show/Show';
import { ToastContainer, toast } from 'react-toastify';

const Display = () => {
    const [Datas, setDatas] = useState([])
    // const [cart, setCart] = useState([])
    useEffect(()=>{
        fetch('program.json')
        .then(res => res.json())
        .then(data => setDatas(data))
    },[])
   
 
    const [cart, setCart] = useState([])

    const CartBookmark = (Datas) => {
        if(cart.includes(Datas)){
            toast("You Have Already Bookmarked This Blog!")
            const NewCart = [...cart, Datas]
            setCart(NewCart)
        }
        else{
            const NewCart = [...cart, Datas]
            setCart(NewCart)
        }
    }

    const [time, setTime] = useState(0)
    const readTime =(data) => {
        setTime(data + time)
    }

    return (
        <>
            <div className='container mx-auto md:flex gap-30'>
                <div className="p-5 w-3/3">
                    {
                        Datas.map(data => <Show 
                            data={data} 
                            key={data.id}
                            CartBookmark={CartBookmark}
                            readTime={readTime}
                            ></Show>)
                    }
                </div>
                <div className="bg-blue-50 p-5 mt-5 mr-5 rounded md:w-2/3 static">
                    <div className="sticky top-0">
                        <Duration time={time}></Duration>
                        <h1 className='text-2xl text-center font-semibold mb-3'>Bookmarked Blogs : {cart.length}</h1>
                        {
                            cart.map(data => <Cart cart={data} key={data.id}></Cart>)
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export {Display};