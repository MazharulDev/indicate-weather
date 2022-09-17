import React from 'react';
import { useRef } from 'react';
import { FcSearch } from "react-icons/fc"

const SearchBox = ({ setWeather }) => {
    const textSearch = useRef()
    const handleSubmit = (e) => {
        e.preventDefault()
        setWeather(textSearch.current.value);
        textSearch.current.value = '';
    }
    return (
        <div className="py-10 px-2">
            <div className="max-w-md mx-auto rounded-lg overflow-hidden md:max-w-xl">
                <div className="md:flex">
                    <div className="w-full p-3">
                        <form onSubmit={handleSubmit} className="relative">
                            <FcSearch className='absolute text-xl text-gray-400 top-5 left-4' />
                            <input type="text" className="bg-white h-14 w-full px-12 rounded-lg focus:outline-none" name="search" placeholder='Search City' ref={textSearch} />
                            <input type="submit" className="absolute top-4 right-5 border-l pl-4 hover:text-blue-500 cursor-pointer" value="Search" />
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default SearchBox;