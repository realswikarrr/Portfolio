import {
  Container,
  Box,
  Heading,
  Image,
  useColorModeValue,
  Button,
  Link,
  List,
  ListItem,
} from "@chakra-ui/react";
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub } from "react-icons/io5";
import NextLink from "next/link";
import Layout from "../components/layouts/article";
import { ChevronRightIcon } from "@chakra-ui/icons";
import Section from "../components/section";
import Paragraph from "../components/paragraph";
import { BioSection, BioYear } from "../components/bio";

const Page = () => {
  return (
    <Layout>
      <Container>
        <Box
          borderRadius="lg"
          bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
          mb={6}
          p={3}
          align="center"
        >
          Hello, I&apos;m a full-stack developer based in Nepal!
        </Box>

        <Box display={{ md: "flex" }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Swikar Adhikari
            </Heading>
            <p>Entertainer ( Artist / Developer / Designer )</p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            align="center"
          >
            <Image
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              maxWidth="100px"
              display="inline-block"
              borderRadius="full"
              src="/images/swikar.jpg"
              alt="Profile Image"
            />
          </Box>
        </Box>

        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Work
          </Heading>
          <Paragraph>
            Swikar is a freelance and a full-stack developer based in Nepal with
            a passion for building digital services/stuff he wants. He has a
            knack for all things launching products, from planning and designing
            all the way to solving real-life problems with code. When not
            online, he loves hanging out with his books.
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink href="/works">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                My Portfolio
              </Button>
            </NextLink>
          </Box>
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>2000</BioYear>
            Born in Kathmandu, Nepal
          </BioSection>
          <BioSection>
            <BioYear>2022</BioYear>
            Completed the Bachelor&apos;s In Computer Science From University Of
            Wolverhampton
          </BioSection>
          <BioSection>
            <BioYear>2021</BioYear>
            Worked At Ayo Studio as a Graphic Designer.
          </BioSection>
          <BioSection>
            <BioYear>2022</BioYear>
            Worked At PrinceLab as a Web Developer Intern.
          </BioSection>
          <BioSection>
            <BioYear>2022 to present</BioYear>
            Works as a Full Stack Web Developer.
          </BioSection>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            I ♥
          </Heading>
          <Paragraph>
            Art, Music , Playing Guitar,{" "}
            <Link href="https://swikargallery.com" target="_blank">
              Photography
            </Link>
            , Singing, AI
          </Paragraph>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            Find Me On
          </Heading>
          <List>
            <ListItem>
              <Link href="https://github.com/realswikarrr" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoLogoGithub />}
                >
                  @realswikarrr
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://twitter.com/swikarr_" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoLogoTwitter />}
                >
                  @swikarr_
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://www.instagram.com/swikarr_" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoLogoInstagram />}
                >
                  @swikarr_
                </Button>
              </Link>
            </ListItem>
          </List>

          <Box align="center" my={4}>
            <NextLink href="/posts" passHref scroll={false}>
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                Popular posts
              </Button>
            </NextLink>
          </Box>
        </Section>
      </Container>
    </Layout>
  );
};

export default Page;
