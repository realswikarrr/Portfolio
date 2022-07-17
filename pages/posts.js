import { Container, Heading, SimpleGrid } from "@chakra-ui/react";
import Layout from "../components/layouts/article";
import Section from "../components/section";
import { GridItem } from "../components/grid-item";

// import thumb500PaidUsers from "../public/images/contents/blog-500-paid-users.jpg";
import thumbGit from "../public/images/contents/thumbGit.jpeg";
import thumbDark from "../public/images/contents/darkThumb.png";

const Posts = () => (
  <Layout title="Posts">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Popular Posts
      </Heading>

      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="How To Setup Dark Mode Using Chakra UI"
            thumbnail={thumbDark}
            href="https://medium.com/@swikarr_/dark-mode-using-chakra-ui-5a596e8b7d6e"
          />
          <GridItem
            title="Why Use Conventional Git Commits ?"
            thumbnail={thumbGit}
            href="https://medium.com/@swikarr_/conventional-git-commits-88ca1e4e2298"
          />
        </SimpleGrid>
      </Section>

      {/* <Section delay={0.5}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="How to Price Yourself as a Freelance Developer"
            thumbnail={thumbHowToPriceYourself}
          />
        </SimpleGrid>
      </Section> */}
    </Container>
  </Layout>
);

export default Posts;
