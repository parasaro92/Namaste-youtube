import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('scrolls the category list with its navigation controls', () => {
  render(<App />);
  const categoryList = screen.getByRole('region', { name: 'Video categories' });
  Object.defineProperty(categoryList, 'clientWidth', { configurable: true, value: 200 });
  Object.defineProperty(categoryList, 'scrollWidth', { configurable: true, value: 900 });
  categoryList.scrollBy = jest.fn();

  fireEvent(window, new Event('resize'));
  fireEvent.click(screen.getByRole('button', { name: 'Scroll categories right' }));

  expect(categoryList.scrollBy).toHaveBeenCalledWith({ left: 160, behavior: 'smooth' });

  categoryList.scrollLeft = 200;
  fireEvent.scroll(categoryList);
  expect(screen.getByRole('button', { name: 'Scroll categories left' })).toBeInTheDocument();
});
