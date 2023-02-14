import { FC } from 'react';

import { Post } from '@/types';
import HoverLink from './common/HoverLink';

import styles from './article.module.scss';

const Article: FC<{ post: Post }> = ({ post }) => {
  return (
    <div className={styles.article}>
      <HoverLink href={post.slug}>
        <span className={styles.meta}>
          <h2 className={styles.title}>{post.title}</h2>
          <p className={styles.date}>{post.date}</p>
        </span>
      </HoverLink>

      {post.description.length > 0 ? (
        <p className={styles.desc}>{post.description}</p>
      ) : null}
    </div>
  );
};

export default Article;
