import { Box, Text, useColorModeValue } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";
import { FaHeart } from "react-icons/fa";

const Footer = () => {
    return (
        <Box
            as="footer"
            textAlign="center"
            py={4}
            mt={8}
            borderTop="1px"
            borderColor={useColorModeValue("gray.200", "gray.700")}
        >
            <Text fontSize="sm" mb={2}>
                Built with  <Icon as={FaHeart} color="red.500" />  using Next, Chakra UI, Framer Motion, Three.js, and a lot of coffee.
            </Text>
            <Text fontSize="sm" color={useColorModeValue("gray.600", "gray.400")}>
                © {new Date().getFullYear()} Andika Wiguna. All rights reserved.
            </Text>
        </Box>
    );
};

export default Footer;