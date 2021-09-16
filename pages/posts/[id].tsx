import {
  GetStaticPropsContext,
  InferGetStaticPropsType,
  GetStaticPaths,
} from "next";
import { Article } from "@components/Article";
import type { Post } from "../index";

export default function BlogPost({
  post,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Article>
      <h1>Post title: {post.title}</h1>
      <p>{post.body}</p>
    </Article>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const result = await fetch("http://jsonplaceholder.typicode.com/posts");
  const posts: Post[] = await result.json();

  const paths = posts.map((post) => ({
    params: { id: post.id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const { params } = context;

  const emptyPost: Post = {
    title: "Post not found",
    body: "",
    id: 0,
    userId: 0,
  };

  if (!params?.id) {
    return {
      props: {
        post: emptyPost,
      },
    };
  }

  const result = await fetch(
    `http://jsonplaceholder.typicode.com/posts/${params.id}`
  );
  const post: Post = await result.json();

  return {
    props: {
      post,
    },
  };
};
