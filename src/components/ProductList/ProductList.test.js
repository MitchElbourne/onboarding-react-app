import "@testing-library/jest-dom"
import { render, screen } from '@testing-library/react';
import { MockedProvider } from "@apollo/client/testing";

import { ProductList, GET_FILMS_QUERY } from './ProductList';

const mocks = [
  {
    request: {
      query: GET_FILMS_QUERY
    },
    result: {
      data: {
        allFilms: {
          films: [
            {
              id: 0,
              title: "Test Film 1",
              releaseDate: "01-01-2023"
            },
            {
              id: 1,
              title: "Test Film 2",
              releaseDate: "01-01-2023"
            }
          ]
        }
      }
    }
  }
];

it("renders without error", async () => {
  render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <ProductList />
    </MockedProvider>
  );
  expect(await screen.findByText("Loading...")).toBeInTheDocument();
});

it("should render the correct movie title", async () => {
  render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <ProductList />
    </MockedProvider>
  )

  expect(await screen.findByText("Loading...")).toBeInTheDocument();
  expect(await screen.findByText("Test Film 1")).toBeInTheDocument();
})

it("should show an error in the UI", async () => {
  const errorMock = {
    request: {
      query: GET_FILMS_QUERY
    },
    error: new Error("404: An error occurred")
  }
  render(
    <MockedProvider mocks={[errorMock]} addTypename={false}>
      <ProductList />
    </MockedProvider>
  )

  expect(await screen.findByText("404: An error occurred")).toBeInTheDocument();
})