import React from 'react';

const WeatherShow = ({ weatherDetails }) => {
    const { name, weather, main } = weatherDetails;
    console.log(weatherDetails);
    return (
        <div className='flex justify-center '>
            <div className='p-6 backdrop-blur-sm bg-white/10 rounded-2xl shadow-lg'>
                <div >
                    {weather ? <div className='flex items-center justify-center gap-3'>
                        <img src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`} alt="" />
                        <h2 className='text-2xl font-bold text-white'>{main?.temp}<span>&#8451;</span></h2>
                    </div> : <p className='text-2xl font-bold text-white'>Not found</p>}

                </div>
                {weather ? <h4 className='text-center text-lg font-bold text-white mb-3'>{weather[0]?.main}</h4> : ""}
                <h2 className='text-3xl text-white text-center'>{name}</h2>

            </div>
        </div>
    );
};

export default WeatherShow;