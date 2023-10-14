import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColormodeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

function Navbar({ onSearch, onReset }: { onSearch: (searchText: string) => void; onReset: () => void }) {
  return (
    <HStack justifyContent={"space-between"} padding={"10px"}>
      {<Image src={logo} boxSize={"60px"} onClick={() => onReset()} cursor={"pointer"} />}
      <SearchInput onSearch={onSearch} />
      <ColormodeSwitch />
    </HStack>
  );
}

export default Navbar;
