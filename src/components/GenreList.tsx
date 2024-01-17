import React from 'react'
import useGenres, { Genre } from '../hooks/useGenres'
import { Button, HStack, Heading, Image, List, ListItem, Spinner, Text } from '@chakra-ui/react';
import getCroppedImageUrl from '../services/image-url';
import GenreListSkeleton from './GenreListSkeleton';

interface Props {
    onSelectGenre: (genre: Genre) => void;
    selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
    const { data: genres, isLoading, error } = useGenres();
    const generesSkeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    if (error) return null;
    return (
        <>
            <Heading fontSize='2xl' marginBottom={3}>Genres</Heading>
            <List>
                {isLoading && generesSkeletons.map((genre) => (
                    <GenreListSkeleton key={genre} />
                ))}
                {genres?.results.map((genre) => (
                    <ListItem paddingY={'5px'} key={genre.id}>
                        <HStack >
                            <Image
                                objectFit='cover'
                                boxSize={'32px'} borderRadius={8} src={getCroppedImageUrl(genre.image_background)} />
                            <Button
                                whiteSpace='normal'
                                textAlign='left'
                                fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'normal'}
                                onClick={() => onSelectGenre(genre)
                                }
                                fontSize='lg' variant="link" >{genre.name}</Button>
                        </HStack>
                    </ListItem>
                ))
                }
            </List >
        </>
    )
}

export default GenreList