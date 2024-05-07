import { HStack, Image, Spacer, Text } from "@chakra-ui/react";
import logo from "../assets/ws.png";
import DarkMode from "./DarkMode";

const NavigationBar = () => {
  return (
    <HStack justifyContent="space-between" padding="5px">
      <Image src={logo} boxSize="80px" />
      <Text fontSize="xl">Wetter/Solar-Dashboard</Text>
      <Spacer />
      <DarkMode />
    </HStack>
  );
};

export default NavigationBar;
