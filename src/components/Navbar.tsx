import { Button, HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColormodeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

function Navbar({ onSearch, onReset }: { onSearch: (searchText: string) => void; onReset: () => void }) {
  return (
    <HStack justifyContent={"space-between"} padding={"10px"}>
      <Button variant={"unstyled"} boxSize={"60px"} padding={0} onClick={() => onReset()}>
        <Image src={logo} />
      </Button>
      <SearchInput onSearch={onSearch} />
      <ColormodeSwitch />
    </HStack>
  );
}

export default Navbar;
