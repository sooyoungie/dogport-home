import NextLink from "next/link";
import Image from "next/image";
import { Box, Text } from "@chakra-ui/react";
// import { Global } from "@emotion/react";

export const GridItem = ({ children, href, title, thumbnail }) => (
    <Box 
        w="100%"
        textAlign="center"
    >
        <Box borderRadius="12px" overflow="hidden" mb={3}>
            <Image
                src={thumbnail}
                alt={title}
                placeholder="blur"
                loading="lazy"
            />
        </Box>
        <NextLink href={href} target="_blank">
            <Text mt={2} fontWeight="bold">{title}</Text>
        </NextLink>
        <Text fontSize={14} color="gray.500">{children}</Text>
    </Box>
);

export const WorkGridItem = ({ children, id, title, thumbnail }) => (
    <NextLink href={`/works/${id}`}>
        <Box 
            w="100%"
            textAlign="center"
        >
            <Box borderRadius="12px" overflow="hidden" mb={3}>
                <Image
                    src={thumbnail}
                    alt={title}
                    placeholder="blur"
                />
            </Box>
            <NextLink href={`/works/${id}`}>
                <Text mt={2} fontSize={20} fontWeight="bold">
                    {title}
                </Text>
            </NextLink>
            <Text fontSize={14} color="gray.500">{children}</Text>
        </Box>
    </NextLink>
);

