import React from 'react';

const Show = (props) => {
    const {authorImg, authorName, duration, img, publishDate, title} = props.data
    console.log(props.data)
    return (
        <div>
            <img src={img} alt="" />
        </div>
    );
};

export default Show;