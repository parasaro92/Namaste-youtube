import { memo, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { closeMenu } from '../utils/appSlice';
import { useParams, useSearchParams } from 'react-router-dom';

const WatchPage = () => {
    const [searchParams] = useSearchParams()

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(closeMenu())
    }, [])
  return (
    <div className='px-5 flex w-full'>
      <div className="">
          <iframe
            width="1200"
            height="600"
            src={"https://www.youtube.com/embed/" + searchParams.get("v")}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
    </div>
  );
};

export default memo(WatchPage);