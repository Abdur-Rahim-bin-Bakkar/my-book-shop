import React from 'react';
import Hero from '../Componensts/Hero/Hero';
import Allbooks from '../Componensts/AllBooks/Allbooks';

const HomePage = () => {
    return (
        <div className='max-w-11/12 mx-auto'>
            <Hero/>
            <Allbooks/>
        </div>
    );
};

export default HomePage;