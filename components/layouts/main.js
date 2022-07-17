import Head from "next/head";
import Navbar from "../navbar";
import NoSsr from "../no-ssr";
import { Box, Container } from "@chakra-ui/react";
import MyModel from "../three-model";
import Footer from "../footer";

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Swikar Adhikari</title>
        <meta name="description" content="Swikar's Home Page" />
        <meta name="author" content="Swikar Adhikari" />
        <meta name="author" content="swikarr_" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta property="og:site_name" content="Swikar Adhikari" />
        <meta name="og:title" content="Swikar Adhikari" />
        <meta property="og:type" content="website" />
      </Head>

      <Navbar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        <NoSsr>
          <MyModel />
        </NoSsr>

        {children}
        <Footer />
      </Container>
    </Box>
  );
};

export default Main;
