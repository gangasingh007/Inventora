import React from 'react';
import { useRecoilValue } from 'recoil';
import { isAuthenticatedSelector } from '../atoms/authatom';
import { Navigate } from 'react-router-dom';

const ProtectedRoutes = ({ children }) => {
  const isAuthenticated = useRecoilValue(isAuthenticatedSelector);
  return isAuthenticated ? children : <Navigate to="/landing" replace />;
};

export default ProtectedRoutes;