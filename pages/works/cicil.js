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
                    Cicil <Badge>2019</Badge>
                </Title>
                <P>
                    A financial technology platform that provides students with easy-to-access 
                    financial services for their educational needs.
                    This application is built using Angular, Beego, and PostgreSQL.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="https://www.cicil.co.id" target="_blank">
                        https://www.cicil.co.id <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>Windows/macOS/iOS/Android</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>Angular, ngrx, Custom Angular Library</span>
                    </ListItem>
                </List>
                <WorkImage src="/images/works/cicil-eyecatcher.jpg" alt="Cicil" />
                {/* <WorkImage src="/images/works/dogport_02.png" alt="Dogport" />
                <WorkImage src="/images/works/dogport_03.png" alt="Dogport" /> */}
            </Container>
        </Layout>
    )
}

export default Work;