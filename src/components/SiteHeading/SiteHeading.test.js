import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SiteHeading from './SiteHeading';

describe('<SiteHeading />', () => {
  test('it should mount', () => {
    render(<SiteHeading />);
    
    const siteHeading = screen.getByTestId('SiteHeading');

    expect(siteHeading).toBeInTheDocument();
  });
});