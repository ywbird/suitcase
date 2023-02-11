import { Post } from '@/types';
import Link from 'next/link';

import { getAllPosts } from '@/libs/post';
import Layout from '@/components/layouts/Layouts';

export const getStaticProps = () => {
  return {
    props: {
      posts: getAllPosts(),
    },
  };
};

export default function PostsPage({ posts }: { posts: Post[] }) {
  return (
    <Layout>
      <ul>
        {posts.map((post, i) => (
          <li key={i}>
            <Link href={post.slug}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
}
