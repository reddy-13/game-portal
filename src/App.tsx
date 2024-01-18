import { Box, Grid, GridItem, HStack, Heading, Link, Show } from "@chakra-ui/react";
import "./App.css";
import GameGrid from "./components/GameGrid";
import GameHeading from "./components/GameHeading";
import GenreList from "./components/GenreList";
import Navbar from "./components/Navbar";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";


function App() {

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`, //1024
      }}
      templateColumns={{
        base: '1fr',
        lg: '200px 1fr'
      }}
    >
      <GridItem area="nav">
        <Navbar />
      </GridItem>
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
  );
}

export default App;
