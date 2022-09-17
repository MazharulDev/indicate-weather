import React from 'react';
import { TiWeatherPartlySunny } from "react-icons/ti"

const Navbar = () => {
    return (
        <div className='flex items-center gap-3 py-5 mx-5'>
            <TiWeatherPartlySunny className='text-5xl text-yellow-300' />
            <h2 className='text-4xl text-white font-bold'>Indicate-Weather</h2>
        </div>
    );
};

export default Navbar;