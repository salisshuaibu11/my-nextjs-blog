import Head from "next/head";
import styled from "@emotion/styled";

const Container = styled.div`
  .container {
    min-height: 100vh;
    padding: 0 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
`;
const Main = styled.main`
  .main {
    padding: 5rem 0;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
const BlogTitle = styled.h1`
  .title {
    margin: 0;
    line-height: 1.15;
    font-size: 4rem;
    color: blue;
    text-align: center;
  }
`;

const title: string = "Next.js + Typescript";

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        <BlogTitle className="title">{title}</BlogTitle>
      </Main>
    </Container>
  );
}
