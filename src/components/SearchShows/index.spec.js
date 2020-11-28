import React from 'react';
import { render, screen } from '@testing-library/react';
import SearchShows from './index';


describe("SearchShows", () => {
  test('renders the SearchShows component', () => {
    render(<SearchShows />);

    screen.debug();
  });

  test('renders a heading for the form', () => {
    const { getByText } = render(<SearchShows />);
    const heading = getByText(/Bounteous JavaScript Coding Challenge/i);
    expect(heading).toBeInTheDocument();
  });

  test('renders a text input for the show search', () => {
    const { getByPlaceholderText } = render(<SearchShows />);
    const textInput = getByPlaceholderText(/Search for TV show by name/i);
    expect(textInput).toBeInTheDocument();
  });

  test('renders a Print Shows button', () => {
    const { getByText } = render(<SearchShows />);
    const printButton = getByText(/Print Shows/i);
    expect(printButton).toBeInTheDocument();
  });
  
})