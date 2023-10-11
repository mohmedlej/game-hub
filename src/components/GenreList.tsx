import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Skeleton,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/getCroppedImageUrl";

const GenreList = ({
  onSelectGenre,
  selectedGenre,
}: {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}) => {
  const { data, isLoading } = useGenres();
  const skeletons: number[] = Array.from({ length: 20 }, (_, index) => index);

  if (isLoading)
    return (
      <List>
        {skeletons.map((s) => (
          <ListItem paddingY={2} key={s}>
            <HStack>
              <Skeleton boxSize={"32px"} />
              <Skeleton width={"100px"} height={"10px"} />
            </HStack>
          </ListItem>
        ))}
      </List>
    );
  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY={"5px"}>
          <HStack>
            <Image
              src={getCroppedImageUrl(genre.image_background)}
              boxSize={"32px"}
              borderRadius={8}
            />

            {/*               <Text fontSize={"lg"}>{genre.name}</Text> */}
            <Button
              fontWeight={selectedGenre?.id === genre.id ? "bold" : ""}
              variant={"link"}
              overflow={"clip"}
              onClick={() => onSelectGenre(genre)}
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
