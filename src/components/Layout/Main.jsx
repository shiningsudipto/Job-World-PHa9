import React from 'react';
import Home from '../Home/Home';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Banner from '../Banner/Banner';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Home></Home>
            <Footer></Footer>
        </div>
    );
};

export default Main;