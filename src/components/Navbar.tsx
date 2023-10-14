import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColormodeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

function Navbar({
  onSearch,
  onReset,
  onToggleColorMode,
  colorMode,
}: {
  onSearch: (searchText: string) => void;
  onReset: () => void;
  onToggleColorMode: () => void;
  colorMode: string;
}) {
  return (
    <HStack justifyContent={"space-between"} padding={"10px"}>
      {<Image src={logo} boxSize={"60px"} onClick={() => onReset()} cursor={"pointer"} />}
      <SearchInput onSearch={onSearch} />
      <ColormodeSwitch onToggleColorMode={() => onToggleColorMode()} colorMode={colorMode} />
    </HStack>
  );
}

export default Navbar;
