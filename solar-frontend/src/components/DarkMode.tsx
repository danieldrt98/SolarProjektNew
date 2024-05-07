import { IconButton, useColorMode } from "@chakra-ui/react";
import { FiSun } from "react-icons/fi";
import { IoMoonOutline } from "react-icons/io5";

const DarkMode = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <IconButton
      variant="none"
      aria-label="Toggle DarkMode/WhiteMode"
      icon={colorMode === "dark" ? <FiSun size={24} /> : <IoMoonOutline size={23} />}
      onClick={toggleColorMode}
    />
  );
};

export default DarkMode;
