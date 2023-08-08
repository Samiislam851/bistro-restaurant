import React from 'react';
import Banner from '../../Components/Banner/Banner';
import OrderNow from '../../Components/OrderNow/OrderNow';

const Homepage = () => {
    return (
        <div className='min-h-screen'>
            <Banner/>
            <OrderNow /> 
        </div>
    );
};

export default Homepage;