import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivatRoute = ({ children }) => {

  const { user, loader } = useContext(AuthContext);
  const location = useLocation();

  if (loader) {
    return <div className='bg-gradient-to-br from-indigo-50 to-purple-100 flex  justify-center items-center'><span className="loading loading-ring loading-lg"></span></div>

  }

  if (!user) {
    return <Navigate to={'/login'} state={location?.pathname || '/'} replace ></Navigate>
  }

  return (
    <div>
      {children}
    </div>
  );
};

export default PrivatRoute;