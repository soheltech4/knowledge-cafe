import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'

const Show = (props) => {
    const {id, authorImg, authorName, duration, img, publishDate, title} = props.data
    const CartBookmark = props.CartBookmark
    const readTime=props.readTime

    return (
        <div className='mb-10 border bg-blue-50 p-5 rounded'>
            <img className='rounded-lg' src={img} alt="" />
            <div className='flex justify-between items-center mt-3'>
                <div className='flex justify-between items-center'>
                    <img className='h-10 w-10 rounded-full' src={authorImg} alt="" />
                    <div className='ml-3'>
                        <h1 className='text-lg font-semibold'>{authorName}</h1>
                        <h1>{publishDate}</h1>
                    </div>
                </div>
                <h1>{duration} min read <span onClick={()=>CartBookmark(props.data)}><FontAwesomeIcon icon={faBookmark}/></span></h1>
            </div>
            <h1 className='text-4xl mt-3 font-semibold'>{title}</h1>
            <button className='mt-5 text-blue-600 font-semibold'><span onClick={()=>readTime(props.data.duration)}>Mark as Read</span></button>
        </div>
    );
};

export default Show;