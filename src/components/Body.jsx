import { memo } from 'react';
import Sidebar from './Sidebar';
import MainContainer from './MainContainer';
import { Outlet } from 'react-router-dom';

const Body = () => {
  return (
    <div className='grid grid-flow-col overflow-x-hidden'>
      <Sidebar />
      {/* <MainContainer /> */}
      <Outlet />
    </div>
  );
};

export default memo(Body);