import React from 'react';
import { useQuery, gql } from '@apollo/client';

import { Box, Container, Text } from '@sky-uk/ui-core';

export const GET_FILMS_QUERY = gql`
  query getFilms {
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
    <Container $maxWidth="80%">
      {data?.allFilms?.films && data.allFilms.films.map(film => {
        return (
          <Box 
            key={film.id} 
            $display="flex" 
            $justifyContent="space-between"
            $alignItems="center" 
            $marginBottom="4"
            $border={true} 
            $borderColor="grey40" 
            $borderRadius="1" $padding={4} 
          >
            <Text as="h5" $fontSize="display-5" $fontWeight="bolder">{film.title}</Text>
            <Text as="p" $fontSize="display-6">Release Date: {film.releaseDate}</Text>
          </Box>
        )
      })}
    </Container>
  )
}