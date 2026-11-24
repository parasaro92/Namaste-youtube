import { memo } from 'react';

const Button = ({name}) => {
  return (
    <div className='shrink-0'>
      <button className='py-2 px-5 rounded-lg m-3 bg-gray-200'>{name}</button>
    </div>
  );
};

export default memo(Button);
