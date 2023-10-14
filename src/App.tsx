import { Grid, GridItem, HStack, Show, useColorMode } from "@chakra-ui/react";
import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";
import { Genre } from "./hooks/useGenres";
import { Platform } from "./hooks/usePlatforms";
import GameHeading from "./components/GameHeading";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
      bg={colorMode === "light" ? "gray.50" : "gray.800"}
    >
      <GridItem area={"nav"}>
        <Navbar
          onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText })}
          onReset={() => setGameQuery({} as GameQuery)}
          onToggleColorMode={toggleColorMode}
          colorMode={colorMode}
        />
      </GridItem>
      <Show above="lg">
        <GridItem area={"aside"} paddingX={5}>
          <GenreList selectedGenre={gameQuery.genre} onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })} />
        </GridItem>
      </Show>
      <GridItem area={"main"} marginX={4} marginBottom={4}>
        <GameHeading gameQuery={gameQuery} />
        <HStack marginBottom={10} marginTop={5}>
          <PlatformSelector
            selectedPlatform={gameQuery.platform}
            onSelectPlatform={(platform) => setGameQuery({ ...gameQuery, platform })}
          />
          <SortSelector
            selectedSortOrder={gameQuery.sortOrder}
            onSelectSortOrder={(sortOrder) => setGameQuery({ ...gameQuery, sortOrder })}
          />
        </HStack>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
