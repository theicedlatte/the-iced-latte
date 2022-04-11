import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ImageSorter from './Image-sorter'

describe('<Image-sorter />', () => {
  test('it should mount', () => {
    render(<ImageSorter />);
    
    const imageSorter = screen.getByTestId('Image-sorter');

    expect(imageSorter).toBeInTheDocument();
  });
});