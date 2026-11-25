import { memo } from 'react';

const VideoCard = ({info}) => {
  const { snippet, statistics } = info
  const { channelTitle, title, thumbnails } = snippet

  return (
    <div className='p-2 m-2 w-72 shadow-lg h-90'>
      <img className='rounded-lg' src={thumbnails.high.url} alt="thumbnail" />
      <ul>
        <li className='font-bold py-2'>{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount} views</li>
      </ul>
    </div>
  );
};

// HOC

export const RedBorderVC = (VideoCard) => {
  return (props) => {
    return (
      <div className='p-1 m-1 border-red-500'>
        <VideoCard {...props} />
      </div>
    )
  }
}

export default memo(VideoCard);