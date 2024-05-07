import { HStack, Image, Spacer, Text } from "@chakra-ui/react";
import logo from "../assets/ws.png";
import DarkMode from "./DarkMode";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (search: string) => void;
}

const NavigationBar = ({onSearch}: Props) => {
  return (
    <HStack justifyContent="space-between" padding="5px">
      <Image src={logo} boxSize="80px" />
      <Text fontSize="xl">Wetter/Solar-Dashboard</Text>
      <SearchInput onSearch={onSearch} />
      <Spacer />
      <DarkMode />
    </HStack>
  );
};

export default NavigationBar;
