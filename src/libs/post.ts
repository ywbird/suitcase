import { sync } from 'glob';
import fs from 'fs';
import matter from 'gray-matter';
import readingTime from 'reading-time';
import { Post, PostMatter } from '@/types';

const BASE_PATH = 'posts';

export const getAllPosts = () => {
  const postPaths: string[] = sync(`**/*.mdx`);

  return postPaths.map(parsePost);
};

function parsePost(path: string): Post | undefined {
  try {
    const file = fs.readFileSync(path, { encoding: 'utf-8' });
    const { content, data } = matter(file);
    const grayMatter = data as PostMatter;

    if (grayMatter.draft) {
      return;
    }

    const pathArr = path.split('/');
    pathArr.splice(pathArr.indexOf(BASE_PATH), 1);
    pathArr.unshift('blog');

    return {
      ...grayMatter,
      tags: grayMatter.tags.filter(Boolean),
      date: new Intl.DateTimeFormat('en-US', {
        month: 'short',
        day: '2-digit',
        year: 'numeric',
        formatMatcher: 'best fit',
      }).format(new Date(grayMatter.date)),
      content,
      slug: '/' + pathArr.join('/').replace('.mdx', ''),
      readingMinutes: Math.ceil(readingTime(content).minutes),
      wordCount: content.split(/\s+/gu).length,
    };
  } catch (e) {
    console.error(e);
  }
}
