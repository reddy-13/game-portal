import { GridItem, Heading, SimpleGrid, Skeleton, SkeletonText } from '@chakra-ui/react'
import React from 'react'

const GameDetailSkeleton = () => {

    return (
        <SimpleGrid
            columns={{
                base: 1,
                md: 2
            }}
            spacing={5}
        >
            <GridItem>
                <Skeleton>
                    <Heading>Example</Heading>
                </Skeleton>

                <SkeletonText>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores dicta debitis eos ducimus labore adipisci. Aut fugit corporis quis ut deleniti est fugiat nesciunt animi quos, fuga aliquam unde quibusdam.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores dicta debitis eos ducimus labore adipisci. Aut fugit corporis quis ut deleniti est fugiat nesciunt animi quos, fuga aliquam unde quibusdam.
                </SkeletonText>
            </GridItem>
            <GridItem>

            </GridItem>

        </SimpleGrid>
    )
}

export default GameDetailSkeleton