import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivatRoute = ({ children }) => {

  const { user, loader } = useContext(AuthContext);
  const location = useLocation();
  console.log(location)

  if (loader) {
    return <h2>Loading...</h2>
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