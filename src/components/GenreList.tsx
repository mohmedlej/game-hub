import {
  HStack,
  Image,
  List,
  ListItem,
  Skeleton,
  Text,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/getCroppedImageUrl";

const GenreList = () => {
  const { data, isLoading } = useGenres();
  const skeletons: number[] = Array.from({ length: 20 }, (_, index) => index);

  if (isLoading)
    return (
      <List>
        {skeletons.map(() => (
          <ListItem paddingY={2}>
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
            <Text fontSize={"lg"}>{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
