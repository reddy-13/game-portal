import { HStack, Image, Text } from "@chakra-ui/react";
import Logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <HStack padding="10px">
      <Link to="/">
        <Image src={Logo} boxSize="60px" objectFit={'cover'} />
      </Link>

      <SearchInput />
      <Link to="/about" >
        <Text fontWeight="bold" className="nav-link" >About</Text>
      </Link>
      <ColorModeSwitch />
    </HStack>
  );
};

export default Navbar;
