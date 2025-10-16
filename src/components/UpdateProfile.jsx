import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { useNavigate } from 'react-router';

const UpdateProfile = () => {

    const {updateUserProfile} = useContext(AuthContext);
    const navigate  = useNavigate();

     const {
            register,
            handleSubmit,
            formState: { errors },
        } = useForm();

         const onSubmit = (data) => {
            const { Name, Photo } = data;
                console.log(data.Photo)
            updateUserProfile(Name, Photo)
            .then(()=>{
                navigate('/profile')
            })
                

        
            }
    return (
        <div className='min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 flex justify-center items-center'>
            <div className="w-full max-w-md p-8  space-y-3 rounded-xl bg-gray-200  text-gray-800">
                <h1 className="text-2xl font-bold text-center text-blue-400">Update Your  Profile</h1>
                <form onSubmit={handleSubmit(onSubmit)} noValidate="" action="" className="space-y-6">
                    <div className="space-y-1 text-sm">
                        <label htmlFor="username" className="block  text-gray-600">Name</label>
                        <input {...register("Name", { required: true })} type="text" id="username" placeholder="Username" className="w-full px-4 py-3 rounded-md  border-gray-300  bg-gray-50  text-gray-800 focus:border-violet-600" />
                        {errors.Name && <span>This field is required</span>}
                    </div>
                    
                    <div className="space-y-1 text-sm">
                        <label htmlFor="photo url" className="block  text-gray-600">Photo URL</label>
                        <input {...register("Photo",)} type="text" id="photo" placeholder="Photo URL" className="w-full px-4 py-3 rounded-md  border-gray-300  bg-gray-50  text-gray-800 focus:border-violet-600" />

                    </div>
                     
                    <button className="block w-full p-3 text-center rounded-sm  text-gray-50  bg-blue-400">Update</button>
                </form>
               
                
                 
            </div>
        </div>
    );
};

export default UpdateProfile;