import React from 'react';
import img from '../../assets/menu/banner3.jpg'
const Menu = () => {
    return (
        <div className=''>
           

            <div className="hero min-h-screen" style={{ backgroundImage: `url(${img})` }}>
                <div className="hero-overlay bg-opacity-10"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className=" bg-black bg-opacity-50 py-10 px-20 md:py-20 md:px-40">
                        <h1 className="mb-5 text-5xl md:text-7xl font-semibold ">Our menu</h1>
                        <p className="mb-5 uppercase">Would You Like To Try A Dish?</p>
                    </div>
                </div>
            </div>



        </div>
    );
};

export default Menu;