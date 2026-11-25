import { memo, useCallback, useEffect, useRef, useState } from 'react';
import Button from './Button';

const ButtonList = () => {
  const list = ['All', 'Gaming', 'Song', 'Live', 'Cricket', 'News', 'Cooking', 'Valentines', 'Football', 'Animals', 'Movies', 'Anime', 'The Avengers'];
  const listRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const updateScrollButtons = useCallback(() => {
    const element = listRef.current;
    if (!element) return;

    setCanScrollLeft(element.scrollLeft > 0);
    setCanScrollRight(element.scrollLeft + element.clientWidth < element.scrollWidth);
  }, []);

  useEffect(() => {
    updateScrollButtons();
    window.addEventListener('resize', updateScrollButtons);
    return () => window.removeEventListener('resize', updateScrollButtons);
  }, [updateScrollButtons]);

  const scroll = (direction) => {
    listRef.current?.scrollBy({ left: direction * 160, behavior: 'smooth' });
  };

  return (
    <div className='relative flex items-center'>
      {canScrollLeft && (
        <button
          aria-label='Scroll categories left'
          className='absolute left-0 z-10 rounded-full bg-white px-2 py-1 shadow'
          onClick={() => scroll(-1)}
          type='button'
        >
          ‹
        </button>
      )}
      <div
        aria-label='Video categories'
        className='flex w-[90%] overflow-x-auto whitespace-nowrap [scrollbar-width:none] [&::-webkit-scrollbar]:hidden'
        onScroll={updateScrollButtons}
        ref={listRef}
        role='region'
      >
        {list.map((name) => <Button key={name} name={name} />)}
      </div>
      {canScrollRight && (
        <button
          aria-label='Scroll categories right'
          className='absolute right-0 z-10 rounded-full bg-white px-2 py-1 shadow'
          onClick={() => scroll(1)}
          type='button'
        >
          ›
        </button>
      )}
    </div>
  );
};

export default memo(ButtonList);
