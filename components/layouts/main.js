import { Box, Container } from '@chakra-ui/layout'
import Head from 'next/head'
import Navbar from '../navbar'

const Main = ({ children, router }) => {
    return (
        <Box as="main">
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width initial-scale=1"
                    charSet="utf-8"
                />
                <title>Raúl Seguí</title>
            </Head>

            <Navbar path={router.asPath} />

            <Container maxW="container.md" pt={14}>
                {children}
            </Container>
        </Box>
    )
}

export default Main
