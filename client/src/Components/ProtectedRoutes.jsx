import React from 'react';
import { useRecoilValue } from 'recoil';
import { isAuthenticatedselector } from '../atoms/authatom';
import { Navigate } from 'react-router-dom';

const ProtectedRoutes = ({ children }) => {
  const isAuthenticated = useRecoilValue(isAuthenticatedselector);
  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoutes;