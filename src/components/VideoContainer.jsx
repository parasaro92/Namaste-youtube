import { memo, useEffect, useState } from 'react';
import VideoCard, { RedBorderVC } from './VideoCard';
import { YOUTUBE_VIDEOS_API } from '../utils/constants';
import { Link } from 'react-router-dom';

const VideoContainer = () => {
  const [videos, setVideos] = useState([])
  const VideoCardPromoted = RedBorderVC(VideoCard)

  useEffect(() => {
    getVideos()
  }, [])

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API)
    const json = await data.json()
    setVideos(json.items)
  }

  return (
    <div className='flex flex-wrap'>
      {videos[0] && <VideoCardPromoted info={videos[0]} />}
      {videos.map(v => (
        <Link to={"/watch?v=" + v.id}>
          <VideoCard key={v.id} info={v} />
        </Link>
      ))}
    </div>
  );
};

export default memo(VideoContainer);