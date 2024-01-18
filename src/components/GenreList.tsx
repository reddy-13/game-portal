import { Button, HStack, Heading, Image, List, ListItem } from '@chakra-ui/react';
import useGenres from '../hooks/useGenres';
import getCroppedImageUrl from '../services/image-url';
import useGameQueryStore from '../store';
import GenreListSkeleton from './GenreListSkeleton';



const GenreList = () => {
    const { data: genres, isLoading, error } = useGenres();
    const selectedGenreId = useGameQueryStore(s => s.gameQuery.genreId)
    const setSelectedGenreId = useGameQueryStore(s => s.setGenreId);
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
                                fontWeight={genre.id === selectedGenreId ? 'bold' : 'normal'}
                                onClick={() => setSelectedGenreId(genre.id)
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