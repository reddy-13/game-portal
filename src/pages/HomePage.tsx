import { Grid, Show, GridItem, HStack, Heading, Box, Link } from '@chakra-ui/react'
import GameGrid from '../components/GameGrid'
import GameHeading from '../components/GameHeading'
import GenreList from '../components/GenreList'
import PlatformSelector from '../components/PlatformSelector'
import SortSelector from '../components/SortSelector'

const HomePage = () => {
    return (
        <Grid
            templateAreas={{
                base: `"main"`,
                lg: `"nav nav" "aside main"`, //1024
            }}
            templateColumns={{
                base: '1fr',
                lg: '200px 1fr'
            }}
        >
            <Show above="lg">
                <GridItem area="aside" paddingX={5}>
                    <GenreList />
                </GridItem>
            </Show>

            <GridItem area="main">
                <Box paddingLeft={10}>
                    <GameHeading />
                </Box>
                <HStack spacing={5} paddingLeft={10} marginBottom={5}>
                    <PlatformSelector />
                    <SortSelector />
                    <Show above="lg">
                        <Heading >Developed by: <Link href="https://greddy.in" target="_black">Goutham Reddy</Link></Heading>
                    </Show>
                </HStack>
                <GameGrid />
            </GridItem>
        </Grid>
    )
}

export default HomePage