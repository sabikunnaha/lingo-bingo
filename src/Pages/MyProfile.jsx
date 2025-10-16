import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import userLogo from '../assets/user.png'
import { MdWavingHand } from "react-icons/md";
import { useNavigate } from 'react-router';

const MyProfile = () => {

    const {user} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleUpdateProfile=()=>{
         navigate('/updateProfile')
    }
    return (
        <div className="flex flex-col justify-center mx-auto gap-6 py-24 shadow-md  sm:px-12 bg-gradient-to-br from-indigo-50 to-purple-100  dark:text-gray-800">
            <img src={user?.photoURL || userLogo } alt="" className="w-32 h-32 mx-auto rounded-full aspect-square" />
            <div className=" flex flex-col gap-5 justify-center items-center my-12">
                <div className="my-2 space-y-6">
                    <h2 className=" flex justify-center items-center gap-3 text-xl font-semibold sm:text-2xl">Hi!
                        <span className='bg-gradient-to-r from-purple-500 via-blue-400 to-blue-800 bg-clip-text text-transparent'>{user?.displayName || 'User'}</span> 
                        <span><MdWavingHand  className='text-orange-200'/></span></h2>
                    <p className="px-5 text-xs sm:text-base text-gray-700">{user?.email}</p>
                </div>
                 <button  onClick={handleUpdateProfile} className='btn border-none bg-blue-400 rounded-3xl'>Update Profile</button>
            </div>
        </div>
    );
};

export default MyProfile;