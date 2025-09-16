import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/work";
import P from "../../components/paragraph";
import Layout from "../../components/layouts/article";

const Work = () => {
    return (
        <Layout title="Cicil">
            <Container>
                <Title>
                    Cicil <Badge>2023</Badge>
                </Title>
                <P>
                    A financial technology platform that helps banks and non banks improve access 
                    to financial services.
                    This application is built using Angular, Java, Kafka, and PostgreSQL.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="https://www.nikel.com" target="_blank">
                        https://www.nikel.com<ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>Windows/macOS</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>Angular, ngrx, Custom Angular Library</span>
                    </ListItem>
                </List>
                <WorkImage src="/images/works/nikel-eyecatcher.jpg" alt="Cicil" />
                {/* <WorkImage src="/images/works/dogport_02.png" alt="Dogport" />
                <WorkImage src="/images/works/dogport_03.png" alt="Dogport" /> */}
            </Container>
        </Layout>
    )
}

export default Work;