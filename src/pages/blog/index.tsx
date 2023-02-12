import { Post } from '@/types';
import Link from 'next/link';

import { getAllPosts } from '@/libs/post';
import Layout from '@/components/layouts/Layouts';
import HoverLink from '@/components/common/HoverLink';

export const getStaticProps = () => {
  return {
    props: {
      posts: getAllPosts(),
    },
  };
};

export default function PostsPage({ posts }: { posts: Post[] }) {
  return (
    <Layout title="Posts">
      <ul>
        {posts.map((post, i) => (
          <li key={i}>
            <HoverLink href={post.slug}>{post.title}</HoverLink>
          </li>
        ))}
      </ul>
    </Layout>
  );
}
