import { HStack, ListItem, Skeleton, SkeletonText } from '@chakra-ui/react'

const GenreListSkeleton = () => {
    return (
        <ListItem paddingY={'5px'}>
            <HStack>
                <Skeleton boxSize={'32px'} borderRadius={8} />
                <SkeletonText fontSize={'lg'} colorScheme='gray' />
            </HStack>
        </ListItem>
    )
}

export default GenreListSkeleton