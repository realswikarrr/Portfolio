import { Container, Heading, SimpleGrid } from "@chakra-ui/react";
import Section from "../components/section";
import Layout from "../components/layouts/article";
import { WorkGridItem } from "../components/grid-item";
import thumbDiamond from "../public/works/diamondThumb.jpg";
import thumbNiji from "../public/works/thumbNiji.jpeg";
import thumbAmazon from "../public/works/thumbAmazon.png";
import thumbAnime from "../public/works/thumbAnime.png";

const Works = () => {
  return (
    <Layout title="Works">
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Works
        </Heading>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem
              title="E-Commerce"
              thumbnail={thumbDiamond}
              href="https://github.com/realswikarrr/Final-Year-Project"
            >
              E-Commerce App Built Using React , MongoDB and Redux.
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="niji"
              title="Property Website"
              href="https://github.com/realswikarrr/niji"
              thumbnail={thumbNiji}
            >
              Full Stack Web App With Firebase Authentication For Niji Property.
              (Frontend Only)
            </WorkGridItem>
          </Section>

          <Section delay={0.1}>
            <WorkGridItem
              id="amazonclone"
              title="Amazon Clone"
              href="https://github.com/realswikarrr/Amazon-Clone/tree/master"
              thumbnail={thumbAmazon}
            >
              A Clone of E-commerce website Amazon.com with Authentication
            </WorkGridItem>
          </Section>

          <Section delay={0.1}>
            <WorkGridItem
              id="swikaranime"
              thumbnail={thumbAnime}
              href="https://github.com/realswikarrr/anime-watch"
              title="Swikar Anime"
            >
              A Website where all kind of anime video are scraped from website
              like 9anime.
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  );
};

export default Works;
