import React from 'react'
import useGenres from '../hooks/useGenres'
import { HStack, Image, List, ListItem, Spinner, Text } from '@chakra-ui/react';
import getCroppedImageUrl from '../services/image-url';
import GenreListSkeleton from './GenreListSkeleton';

const GenreList = () => {
    const { data: genres, isLoading, error } = useGenres();
    const generesSkeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

    if (error) return null;
    return (
        <List>
            {isLoading && generesSkeletons.map((genre) => (
                <GenreListSkeleton key={genre} />
            ))}
            {genres.map((genre) => (
                <ListItem paddingY={'5px'} key={genre.id}>
                    <HStack >
                        <Image boxSize={'32px'} borderRadius={8} src={getCroppedImageUrl(genre.image_background)} />
                        <Text fontSize='lg' >{genre.name}</Text>
                    </HStack>
                </ListItem>
            ))}
        </List>
    )
}

export default GenreList