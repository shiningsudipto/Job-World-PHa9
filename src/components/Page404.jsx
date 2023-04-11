import React from 'react';
import Header from './Header/Header';

const Page404 = () => {
    return (
        <div>
            <Header></Header>
            <h3 className='text-4xl font-bold text-red-500 text-center mt-40'>oh you came to a wrong path</h3>
            <h4 className='text-center font-semibold'>error code: <span className='text-purple-800'>404</span> </h4>
        </div>
    );
};

export default Page404;