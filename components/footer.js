import { Box } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box align="center" opacity={0.4} fontSize="sm">
      &copy; {new Date().getFullYear()} Swikar Adhikari. All Rights Reserved.
      Inspired From https://www.craftz.dog/.
    </Box>
  );
};

export default Footer;
