import { GetStaticPaths, GetStaticProps } from 'next';
import { MDXRemote } from 'next-mdx-remote';
import { MDXRemoteSerializeResult } from 'next-mdx-remote/dist';

import { getAllPosts } from '@/libs/post';
import { serializeMdx } from '@/libs/mdx';
import Layout from '@/components/layouts/Layouts';

export const getStaticPaths: GetStaticPaths = () => {
  const posts = getAllPosts();

  return {
    paths: posts.map((post) => post?.slug || ''),
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slugs } = params as { slugs: string[] };

  const slug = `/blog/${[...slugs].join('/')}`;

  const post = getAllPosts().find((post) => post?.slug === slug);

  if (!post) {
    return {
      notFound: true,
    };
  }

  const mdx = await serializeMdx(post.content);

  return {
    props: {
      mdx,
    },
  };
};

export default function PostPage({ mdx }: { mdx: MDXRemoteSerializeResult }) {
  return (
    <Layout>
      <div className="post">
        <MDXRemote {...mdx} />
      </div>
    </Layout>
  );
}
