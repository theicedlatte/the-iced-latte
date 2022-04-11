import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Sketches from './Sketches';

describe('<Sketches />', () => {
  test('it should mount', () => {
    render(<Sketches />);
    
    const sketches = screen.getByTestId('Sketches');

    expect(sketches).toBeInTheDocument();
  });
});