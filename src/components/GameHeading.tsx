import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";

const GameHeading = ({ gameQuery }: { gameQuery: GameQuery }) => {
  const heading = `${gameQuery.platform?.name || ""} ${gameQuery.genre?.name || ""} 
  ${gameQuery.platform == null && gameQuery.genre == null ? "All" : ""} Games`;
  return <Heading as="h2">{heading}</Heading>;
};

export default GameHeading;
