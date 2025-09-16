import NextLink from "next/link"
import {
    Box,
    Heading,
    Image,
    Badge
} from "@chakra-ui/react"
import { ChevronRightIcon } from "@chakra-ui/icons"

export const Title = ({ children }) => (
    <Box>
        <NextLink 
            href="/works"
            style={{ color: 'var(--chakra-colors-pink-400)' }}
        >
            Works
        </NextLink>
        <span>
            &nbsp;
            <ChevronRightIcon />
            &nbsp;
        </span>
        <Heading display="inline-block" as="h3" fontSize={20} mb={4}>
            {children}
        </Heading>
    </Box>
)

export const WorkImage = ({ src, alt }) => (
    <Image borderRadius="lg" w="full" src={src} alt={alt} mb={4} />
)

export const Meta = ({ children }) => (
    <Badge colorScheme="green" mr={2} fontSize="0.8em">
        {children}
    </Badge>
)