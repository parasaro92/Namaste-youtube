import { memo } from 'react';
import VideoCard from './VideoCard';

const VideoContainer = () => {
  return (
    <div>
      <VideoCard />
    </div>
  );
};

export default memo(VideoContainer);