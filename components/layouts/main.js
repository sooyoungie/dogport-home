import Head from "next/head";
import Navbar from "../navbar";
import { Box, Container } from "@chakra-ui/react";
import VoxelDogLoader from "../voxel-dog-loader";
import NoSSR from "../no-ssr";
import Footer from "../footer";

const Main = ({ children, router }) => {
    return (
        <Box as="main" pb={8}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="Andika's homepage" />
                <meta name="author" content="Andika Wiguna" />
                <meta name="author" content="sooyoungie" />
                <link rel="apple-touch-icon" href="apple-touch-icon.png" />
                <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
                <meta property="og:site_name" content="Andika Wiguna" />
                <meta name="og:title" content="Andika Wiguna" />
                <meta property="og:type" content="website" />
                <title>Andika Wiguna - Homepage</title>
            </Head>

            <Navbar path={router.asPath} />

            <Container maxW="container.md" pt={14}>
                <NoSSR>
                    <VoxelDogLoader />
                </NoSSR>
                {children}
                <Footer />
            </Container>
        </Box>
    )
}

export default Main;