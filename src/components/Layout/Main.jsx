import React from 'react';
import Home from '../Home/Home';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Banner from '../Banner/Banner';
import JobCategory from '../JobCategory/JobCategory';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <JobCategory></JobCategory>
            <Home></Home>
            <Footer></Footer>
        </div>
    );
};

export default Main;