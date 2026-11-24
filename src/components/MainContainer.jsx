import { memo } from 'react';
import ButtonList from './ButtonList';
import VideoContainer from './VideoContainer';

const Body = () => {
  return (
    <div className='col-span-10'>
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default memo(Body);