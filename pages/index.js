import { 
    Button,
    Container, 
    Box, 
    Heading, 
    Center, 
    Image, 
    Link,
    useColorModeValue, 
    List,
    ListItem
} from "@chakra-ui/react"
import Section from "../components/section"
import Paragraph from "../components/paragraph"
import NextLink from "next/link"
import { ChevronRightIcon } from "@chakra-ui/icons"
import { BioSection, BioYear } from "../components/bio"
import Layout from "../components/layouts/article"
import { GridItem } from "../components/grid-item"
import {
    IoLogoGithub,
    IoLogoLinkedin,
    IoLogoInstagram,
    IoLogoFacebook
} from "react-icons/io5"

const Page = () => {
    return (
        <Layout>
            <Container>
                <Box borderRadius="lg" bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")} p={3} mb={6} display="flex" alignItems="center" justifyContent="center" >
                    Hello, I&apos;m a web developer based in Indonesia!
                </Box>

                <Box display={{ md: "flex" }}>
                    <Box flexGrow={1}>
                        <Heading as="h2" variant="page-title">
                            Andika Wiguna
                        </Heading>
                        <p>Digital Wizard ( Developer / Tech Enthusiast / Foodie )</p>
                    </Box>
                    <Box
                        flexShrink={0}
                        mt={{ base: 4, md: 0 }}
                        ml={{ md: 6 }}
                        textAlign="center"
                    >
                        <Center>
                            <Image
                                borderColor="whiteAlpha.800"
                                borderWidth={2}
                                borderStyle="solid"
                                maxWidth="100px"
                                display="inline-block"
                                borderRadius="full"
                                src="/images/andika.jpg"
                                alt="Profile image"
                            />
                        </Center>
                    </Box>
                </Box>
                <Section delay={0.1}>
                    <Heading as="h3" variant="section-title">
                        Profile
                    </Heading>
                    <Paragraph>
                    A frontend magician by day and a curious explorer by night, 
                    A Web Developer with a passion for crafting digital experiences.
                    From crafting sleek web interfaces to solving complex coding puzzles,
                    He&apos;s all about turning ideas into reality through code.
                    When He&apos;s not coding, you&apos;ll find him exploring new cuisines,
                    immersing himself in the world of technology, traveling, 
                    jamming to tunes, geeking out over pop culture, sports, 
                    PC builds, and custom keyboards.
                    </Paragraph>
                    <Box align="center" my={4}>
                        <NextLink href="/works">
                            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                                My portfolio
                            </Button>
                        </NextLink>
                    </Box>
                </Section>
                <Section delay={0.2}>
                    <Heading as="h3" variant="section-title">
                        Bio
                    </Heading>
                    <BioSection>
                        <BioYear>1995</BioYear>
                        Born in Indonesia.
                    </BioSection>
                    <BioSection>
                        <BioYear>2014</BioYear>
                        Completed High School study.
                    </BioSection>
                    <BioSection>
                        <BioYear>2018</BioYear>
                        Completed study at Gunadarma University and graduated with a Bachelor of Science.
                    </BioSection>
                    <BioSection>
                        <BioYear>2019 - 2023</BioYear>
                        Working as a Frontend Engineer and Squad Lead at CICIL.
                    </BioSection>
                    <BioSection>
                        <BioYear>2023 - 2024</BioYear>
                        Working as a Senior Frontend Engineer at NIKEL.
                    </BioSection>
                </Section>
                <Section delay={0.3}>
                    <Heading as="h3" variant="section-title">
                        I ♥
                    </Heading>
                    <Paragraph>
                        Music, PC Builds, Gaming, Food, and Custom Keyboard.
                    </Paragraph>
                </Section>
                <Section delay={0.3}>
                    <Heading as="h3" variant="section-title">
                        On the web
                    </Heading>
                    <List>
                        <ListItem>
                            <Link href="https://github.com/sooyoungie" target="_blank">
                                <Button variant="ghost" colorScheme="teal" leftIcon={<IoLogoGithub />}>
                                    @sooyoungie
                                </Button>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link href="https://www.linkedin.com/in/andika-wiguna/" target="_blank">
                                <Button variant="ghost" colorScheme="teal" leftIcon={<IoLogoLinkedin />}>
                                    Andika Wiguna
                                </Button>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link href="https://www.instagram.com/andikancuts" target="_blank">
                                <Button variant="ghost" colorScheme="teal" leftIcon={<IoLogoInstagram />}>
                                    @andikancuts
                                </Button>
                            </Link>
                        </ListItem>
                    </List>
                </Section>
            </Container>
        </Layout>
    )
}

export default Page
