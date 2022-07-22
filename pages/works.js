import { Container, Heading, SimpleGrid } from "@chakra-ui/react";
import Section from "../components/section";
import Layout from "../components/layouts/article";
import { WorkGridItem } from "../components/grid-item";
import thumbDiamond from "../public/works/diamondThumb.jpg";
import thumbNiji from "../public/works/thumbNiji.jpeg";
import thumbAmazon from "../public/works/thumbAmazon.png";
import thumbAnime2 from "../public/works/thumbAnime2.png";
import thumbInsta from "../public/works/thumbInsta.png";
import thumbNPM from '../public/works/thumbNPM.png'

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
              title="Insta Link"
              thumbnail={thumbInsta}
              href="https://github.com/realswikarrr/insta-link"
            >
              A Full Stack Web Application Using t3 Stack (TypeScript, tRPC,
              Tailwind, PlanetScale , Prisma and Next JS)
            </WorkGridItem>
          </Section>

          <Section delay={0.1}>
            <WorkGridItem
              id="niji"
              title="NPM ALL"
              href="https://github.com/realswikarrr/npm-all"
              thumbnail={thumbNPM}
            >
              A Full Stack t3 Stack App Where You Can Copy Paste NPM Easily (TypeScript, tRPC,
              Chakra UI, PlanetScale , Prisma and Next JS)

            </WorkGridItem>
          </Section>

          <Section delay={0.2}>
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

          <Section delay={0.3}>
            <WorkGridItem
              id="animer"
              thumbnail={thumbAnime2}
              href="https://github.com/realswikarrr/anime-recommendation"
              title="Anime R"
            >
              A WebApp where it recommends you an anime using a API route
              provided by kitsu.
            </WorkGridItem>
          </Section>

          <Section delay={0.4}>
            <WorkGridItem
              id="amazonclone"
              title="Amazon Clone"
              href="https://github.com/realswikarrr/Amazon-Clone/tree/master"
              thumbnail={thumbAmazon}
            >
              A Clone of E-commerce website Amazon.com with Authentication
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  );
};

export default Works;
