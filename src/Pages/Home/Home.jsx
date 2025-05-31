import React from 'react';
import Banner from './Banner/Banner';
import SubBanner from './Banner/SubBanner/SubBanner';
import OurServices from './OurServices/OurServices';
import Ability from './Ability/Ability';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <SubBanner></SubBanner>
            <OurServices></OurServices>
            <Ability></Ability>
        </div>
    );
};

export default Home;