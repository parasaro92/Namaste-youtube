import { memo } from 'react';
import Button from './Button';

const ButtonList = () => {
    const list = ['All', 'Gaming', 'Song', 'Live', 'Cricket', 'News', 'Cooking', 'Valentines', 'Football', 'Animals', 'Movies', 'Anime'];
  return (
    <div className='flex'>
      {list.map((name) => <Button key={name} name={name} />)}
    </div>
  );
};

export default memo(ButtonList);