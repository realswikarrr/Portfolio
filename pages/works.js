import { Container, Heading, SimpleGrid, Divider } from "@chakra-ui/react";
import Section from "../components/section";
import { WorkGridItem } from "../components/grid-item";
import thumbDiamond from "../public/works/diamondThumb.jpg";
import thumbNiji from "../public/works/thumbNiji.jpeg";
import thumbAmazon from "../public/works/thumbAmazon.png";
import thumbAnime from "../public/works/thumbAnime.png";

const Works = () => {
  return (
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem
            id="diamondfitness"
            title="E-Commerce"
            thumbnail={thumbDiamond}
          >
            E-Commerce App Built Using React , MongoDB and Redux.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="niji"
            title="Property Website"
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
            thumbnail={thumbAmazon}
          >
            A Clone of E-commerce website Amazon.com with Authentication
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem
            id="swikaranime"
            thumbnail={thumbAnime}
            title="Swikar Anime"
          >
            A Website where all kind of anime video are scraped from website
            like 9anime.
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  );
};

export default Works;
