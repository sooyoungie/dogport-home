import { Container, Box, Heading, SimpleGrid, Divider } from "@chakra-ui/react";
import Section from "../components/section";
import { WorkGridItem } from "../components/grid-item";
import cicilEyecatcher from "../public/images/works/cicil-eyecatcher.jpg";
import nikelEyecatcher from "../public/images/works/nikel-eyecatcher.jpg";
import Layout from "../components/layouts/article";

const Works = () => {
    return (
        <Layout>
            <Container>
                <Heading as="h3" fontSize={20} mb={4}>
                    Works
                </Heading>

                <SimpleGrid columns={[1, 1, 2]} gap={6}>
                    <Section>
                        <WorkGridItem
                            id="cicil"
                            title="Cicil"
                            thumbnail={cicilEyecatcher}
                        >
                            A financial technology platform that provides students with easy-to-access 
                            financial services for their educational needs, including loan services,
                            payment services, and B2B services.
                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem
                            id="nikel"
                            title="Nikel"
                            thumbnail={nikelEyecatcher}
                            >
                            A financial technology platform that helps banks and non banks improve access 
                            to financial services by leveraging technology and analytics to deliver a suite of
                            products the customers in Indonesia.
                        </WorkGridItem>
                    </Section>
                </SimpleGrid>
            </Container>
            <Divider my={6} />
        </Layout>
    );
}

export default Works;