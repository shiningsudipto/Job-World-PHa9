import React from 'react';

const Blog = () => {
    return (
        <div className='container mx-auto my-6 bg-white text-black'>
            <h3 className='text-2xl font-semibold mt-8 mb-4'>When should you use context API?</h3>
            <p>When I need to pass data down multiple levels of the component tree. In situations where data needs to be accessed by components that are several levels deep in the hierarchy, using Context API can simplify the process of passing data down through props.</p>
            <h3 className='text-2xl font-semibold mt-8 mb-4'>What is custom hook?</h3>
            <p>A custom hook is a function that uses the React Hooks API to implement reusable logic that can be shared across multiple components in a React application.</p>
            <h3 className='text-2xl font-semibold mt-8 mb-4'>What is the purpose of useRef</h3>
            <p>The useRef Hook allows to persist values between renders.
                It can be used to store a mutable value that does not cause a re-render when updated.
                It can be used to access a DOM element directly.</p>
            <h3 className='text-2xl font-semibold mt-8 mb-4'>What is the purpose of useMemo</h3>
            <p>The React useMemo Hook returns a memoized value.</p>
            <p>This can improve performance.</p>
            <p>The useMemo Hook can be used to keep expensive, resource intensive functions from needlessly running.</p>
            <p>We can wrap the expensive function call with useMemo.</p>
        </div>
    );
};

export default Blog;