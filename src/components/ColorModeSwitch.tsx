import { HStack, Switch, Text } from "@chakra-ui/react";

const ColormodeSwitch = ({ onToggleColorMode, colorMode }: { onToggleColorMode: () => void; colorMode: string }) => {
  return (
    <HStack>
      <Switch colorScheme="green" isChecked={colorMode === "dark"} onChange={() => onToggleColorMode()} />
      <Text>Dark&nbsp;Mode</Text>
    </HStack>
  );
};

export default ColormodeSwitch;
