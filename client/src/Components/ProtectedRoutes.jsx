import React from 'react';
import { useRecoilValue } from 'recoil';
import { isAuthenticatedselector } from '../atoms/authatom';
import { Navigate } from 'react-router-dom';

const ProtectedRoutes = ({ children }) => {
  const isAuthenticated = useRecoilValue(isAuthenticatedselector);
  return isAuthenticated ? children : <Navigate to="/register" replace />;
};

export default ProtectedRoutes;