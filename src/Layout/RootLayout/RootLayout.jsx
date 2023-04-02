import React from 'react';
import { Outlet } from 'react-router-dom';

const RootLayout = () => {
  return (
    <div style={{marginTop: "50px"}}>
      <Outlet />
    </div>
  );
};

export default RootLayout;