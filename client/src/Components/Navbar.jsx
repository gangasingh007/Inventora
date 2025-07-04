import React from 'react';
import ThemeToggle from './ThemeToggle';
import { useRecoilState } from 'recoil';
import { authAtom } from '../atoms/authatom';

const Navbar = () => {
  const [auth, setAuth] = useRecoilState(authAtom);

  return (
    <div className='nav'>
      {!auth.token && (
        <div className="links">
          <a href="/register">Sign Up</a>
          <a href="/login">Log In</a>
        </div>
      )}
      <ThemeToggle />
    </div>
  );
};

export default Navbar;
