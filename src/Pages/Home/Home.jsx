import React from 'react';
import Banner from './Banner/Banner';
import SubBanner from './Banner/SubBanner/SubBanner';
import OurServices from './OurServices/OurServices';
import Ability from './Ability/Ability';
import WhyChooseUs from './WhyChoose/WhyChooseUs';
import DentalTabs from './DentalTabs/DentalTabs';
import FAQ from './FAQ/FAQ';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <SubBanner></SubBanner>
            <OurServices></OurServices>
            <Ability></Ability>
            <WhyChooseUs></WhyChooseUs>
            <DentalTabs></DentalTabs>
            <FAQ></FAQ>
        </div>
    );
};

export default Home;