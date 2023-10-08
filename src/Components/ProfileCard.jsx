import React, { useState } from 'react';

const ProfileCard = ({ name, Bio, imageUrl, created, portfolioClick, updated, gitProfile }) => {

    
    return (
        <div className="p-3 mt-[150px] text-center flex flex-col place-items-center bg-white mr-1 ml-1 rounded-xl">

            <div className=" flex justify-center mb-4">

                <img
                    src={imageUrl}
                    alt="Profile"
                    className="w-[200px] h-[200px] rounded-[30px]"
                />

            </div>

            <h2 className="text-2xl font-semibold"><span className='text-blue-600'>NAME : </span>{name}</h2>

            <div className='w-[300px] mt-2'>

                <p className="text-gray-600"><span className='text-lg font-bold text-blue-600 mt-10'>BIO : </span>{Bio}</p>

            </div>

            <p className="text-black mt-2 text-lg mb-2"><a className='cursor-pointer' onClick={portfolioClick} >CLICK TO SEE PORTFOLIO</a></p>

            <p className="text-black mt-2 text-lg mb-2"><a href={gitProfile} target='blank'>CLICK TO SEE GIHUB PROFILE</a></p>

            <p className="text-gray-600 mb-2"><span className='text-lg font-bold text-blue-600'>PROFILE CREATED : </span>{created}</p>

            <p className="text-gray-600"><span className='text-lg font-bold text-blue-600'>LAST UPDATED : </span>{updated}</p>

        </div>
    );
};

export default ProfileCard;