import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'




const Show = (props) => {
    const {authorImg, authorName, duration, img, publishDate, title} = props.data
    console.log(props.data)
    return (
        <div className='mb-10 md:w-4/5'>
            <img className='w-full rounded-lg' src={img} alt="" />
            <div className='flex justify-between items-center mt-3'>
                <div className='flex justify-between items-center'>
                    <img className='h-10 w-10 rounded-full' src={authorImg} alt="" />
                    <div className='ml-3'>
                        <h1 className='text-lg font-semibold'>{authorName}</h1>
                        <h1>{publishDate}</h1>
                    </div>
                </div>
                <h1>{duration} min read <a href=""><FontAwesomeIcon icon={faBookmark}/></a></h1>
            </div>
            <h1 className='text-4xl mt-3 font-semibold'>{title}</h1>
            <h1 className='mt-5 text-blue-600 font-semibold'><a href="">Mark as Read</a></h1>
        </div>
    );
};

export default Show;