import { Container, Heading, SimpleGrid } from "@chakra-ui/react";
import Layout from "../components/layouts/article";
import Section from "../components/section";
import { GridItem } from "../components/grid-item";

// import thumb500PaidUsers from "../public/images/contents/blog-500-paid-users.jpg";
// import thumbFinancialGoal from "../public/images/contents/blog-financial-goal.png";
import thumbHowToPriceYourself from "../public/images/contents/blog-how-to-price-yourself.jpg";

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
            thumbnail={thumbHowToPriceYourself}
            href="https://medium.com/@swikarr_/dark-mode-using-chakra-ui-5a596e8b7d6e"
          />
          {/* <GridItem
            title="I stopped setting a financial goal for my SaaS"
            thumbnail={thumbFinancialGoal}
          /> */}
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
