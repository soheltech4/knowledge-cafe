import React from 'react';

const Blog = () => {
    return (
        <div className='container mx-auto p-5'>
            <div className='bg-blue-50 p-5 mt-10 rounded mb-5'>
                <h1 className='text-2xl font-semibold border bg-blue-200 rounded p-3 mt-3'>(1) What is Difference between Props & State?</h1>
                <h1 className='text-xl font-semibold pl-10 mb-3 mt-2'>Answer: State which is changeable but props can not reset value. props value can only go down but its values cannot be set up.</h1>
                <h1 className='text-2xl font-semibold border bg-blue-200 rounded p-3 mt-3'>(2) How does useState work?</h1>
                <h1 className='text-xl font-semibold pl-10 mb-3 mt-2'>Answer: useState is a React Hook. It returns an array with two values. One is the current value and the second one is a function that updates the current value.</h1>
                <h1 className='text-2xl font-semibold border bg-blue-200 rounded p-3 mt-3'>(3) What is Purpose of useEffect other than fetching data??</h1>
                <h1 className='text-xl font-semibold pl-10 mb-3 mt-2'>Answer: useEffect is a side effect of a component. You can also fetch API data. We can set a dependency on it and it will load after changing data.</h1>
                <h1 className='text-2xl font-semibold border bg-blue-200 rounded p-3 mt-3'>(4) How does react work?</h1>
                <h1 className='text-xl font-semibold pl-10 mb-3 mt-2'>Answer: React created by Jordan Walke. He was a Software Engineer at meta. React is a JS library. It worked by using components. One component can use in different place for this its make easy to work. A Developer easily can make website by using React. React component make JSX which is look like HTML but fully its not HTML</h1>
            </div>
        </div>
    );
};

export default Blog;