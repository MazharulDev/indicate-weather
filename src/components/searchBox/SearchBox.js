import React from 'react';
import { FcSearch } from "react-icons/fc"

const SearchBox = () => {
    return (
        <div class="py-10 px-2">
            <div class="max-w-md mx-auto rounded-lg overflow-hidden md:max-w-xl">
                <div class="md:flex">
                    <div class="w-full p-3">

                        <div class="relative">
                            {/* <i class="absolute fa fa-search text-gray-400 top-5 left-4"></i> */}
                            <FcSearch className='absolute text-xl text-gray-400 top-5 left-4' />
                            <input type="text" class="bg-white h-14 w-full px-12 rounded-lg focus:outline-none" name="" placeholder='Search City' />
                            <span class="absolute top-4 right-5 border-l pl-4 "><i class="text-gray-500 hover:text-green-500 "></i><button className='hover:text-blue-500'>Search</button></span>
                        </div>




                    </div>

                </div>
            </div>

        </div>
    );
};

export default SearchBox;