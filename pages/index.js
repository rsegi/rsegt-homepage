import { Box, Container, Heading } from '@chakra-ui/layout'
import Section from '../components/section'

const Page = () => {
    return (
        <Container>
            <Box borderRadius="lg" mb={8} p={3}>
                <h1>
                    Hello I&apos;m a full-stack developer based in sunny
                    Barcelona.
                </h1>
            </Box>
            <Box display={{ md: 'flex' }}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        Raúl Seguí
                    </Heading>
                    <p>Developer - Skateboarder/Snowboarder - Food enjoyer</p>
                </Box>
            </Box>
            <Section delay={0.1}>
                <Heading as="h3" variant="section-title">
                    Work
                </Heading>
                <p>Paragraph</p>
            </Section>
        </Container>
    )
}

export default Page
