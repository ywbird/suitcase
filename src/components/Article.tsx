import { FC } from 'react';

import { Post } from '@/types';
import HoverLink from './common/HoverLink';

const Article: FC<{ post: Post }> = ({ post }) => {
  return (
    <HoverLink href={post.slug}>
      {post.title} - {post.date}
    </HoverLink>
  );
};

export default Article;
