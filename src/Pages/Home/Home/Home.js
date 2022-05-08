import React from 'react';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Faqs from '../Faqs/Faqs';
import Inventory from '../Inventory/Inventory';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Inventory></Inventory>
            <Faqs></Faqs>
            <Contact></Contact>
        </div>
    );
};

export default Home;