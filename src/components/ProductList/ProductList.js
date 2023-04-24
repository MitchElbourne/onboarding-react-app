import React from 'react';
import { useQuery, gql } from '@apollo/client';
import './ProductList.css';

export const GET_FILMS_QUERY = gql`
  {
    allFilms {
      films {
        title
        id
        releaseDate
      }
    }
  }
`

export function ProductList(props) {
  const { data, loading, error } = useQuery(GET_FILMS_QUERY)

  if (loading) return "Loading...";
  if (error) return <pre>{error.message}</pre>

  return (
    <ul data-testid="ProductList" className="product-list">
      {data.allFilms?.films && data.allFilms.films.map(film => {
        return (
          <li key={film.id}>
            <h4>{film.title}</h4>
            <span>Release Date: {film.releaseDate}</span>
          </li>
        )
      })}
    </ul>
  )
}