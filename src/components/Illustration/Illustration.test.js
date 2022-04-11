import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Illustration from './Illustration';

describe('<Illustration />', () => {
  test('it should mount', () => {
    render(<Illustration />);
    
    const illustration = screen.getByTestId('Illustration');

    expect(illustration).toBeInTheDocument();
  });
});