import { Button, HStack, Heading, Image, List, ListItem, Skeleton } from "@chakra-ui/react";
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
    <>
      <Heading fontSize={20} marginBottom={2}>
        Genres
      </Heading>
      <List>
        {data.map((genre) => (
          <ListItem key={genre.id} paddingY={"5px"}>
            <HStack>
              <Image
                src={getCroppedImageUrl(genre.image_background)}
                boxSize={"32px"}
                borderRadius={8}
                objectFit={"cover"}
              />

              {/*               <Text fontSize={"lg"}>{genre.name}</Text> */}
              <Button
                whiteSpace={"normal"} /* other option is 'nowrap'. This makes text fit by splitting words */
                textAlign={"left"}
                fontWeight={selectedGenre?.id === genre.id ? "bold" : ""}
                variant={"link"}
                onClick={() => onSelectGenre(genre)}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
