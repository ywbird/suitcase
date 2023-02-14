import { Post } from '@/types';

import { getAllPosts } from '@/libs/post';
import Layout from '@/components/layouts/Layouts';
import Article from '@/components/Article';

import styles from './posts.module.scss';

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
      <ul className={styles.postList}>
        {posts.map((post, i) => (
          <li key={i}>
            <Article post={post}></Article>
          </li>
        ))}
      </ul>
    </Layout>
  );
}
