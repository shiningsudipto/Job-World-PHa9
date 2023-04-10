import React from 'react';
import Home from '../Home/Home';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Banner from '../Banner/Banner';
import JobCategory from '../JobCategory/JobCategory';
import FeaturedJobs from '../FeaturedJobs/FeaturedJobs';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <JobCategory></JobCategory>
            <FeaturedJobs></FeaturedJobs>
            <Home></Home>
            <Footer></Footer>
        </div>
    );
};

export default Main;