import { useState } from "react";
import "./App.css";
import { Box, Button, Grid, GridItem, HStack, Heading, Link, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/usePlatforms";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";

export interface GameQuery {
  genreId?: number;
  platformId?: number;
  sortOrder: string;
  searchText: string;
}
function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
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
        <Navbar onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText })} />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genreId: genre.id })} selectedGenreId={gameQuery.genreId} />
        </GridItem>
      </Show>

      <GridItem area="main">
        <Box paddingLeft={10}>
          <GameHeading gameQuery={gameQuery} />
        </Box>
        <HStack spacing={5} paddingLeft={10} marginBottom={5}>
          <PlatformSelector selectedPlatformId={gameQuery.platformId} onSelectedPlatform={(platform) => setGameQuery({ ...gameQuery, platformId: platform.id })} />
          <SortSelector sortOrder={gameQuery.sortOrder} onSelectedSortOrder={(sortOrder) => setGameQuery({ ...gameQuery, sortOrder })} />
          <Show above="lg">
            <Heading >Developed by: <Link href="https://greddy.in" target="_black">Goutham Reddy</Link></Heading>
          </Show>
        </HStack>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
