import React from 'react'
import useGenres from '../hooks/useGenres'
import { Text } from '@chakra-ui/react';

const GenreList = () => {
    const { genres } = useGenres();
    return (
        <ul>
            {genres.map((genre) => (
                <li key={genre.id}>
                    <Text>{genre.name}</Text>
                </li>
            ))}
        </ul>
    )
}

export default GenreList