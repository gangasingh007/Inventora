import React from 'react';
// import { Link } from 'react-router-dom';
// import { useRecoilValue } from 'recoil';
// import { userInfo } from '../atoms/authatom';

const Navbar = () => {
  // const user = useRecoilValue(userInfo);

  return (
    <div className='nav'>
      <div className="profile-image">
        <img src="https://img.freepik.com/premium-photo/icon-define-person-allocate-stylize-250_1137696-4501.jpg?semt=ais_hybrid&w=740" alt="" />
      </div>
    </div>
  );
};

export default Navbar;