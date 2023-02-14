import { isAbsoluteUrl } from 'next/dist/shared/lib/utils';
import { visit } from 'unist-util-visit';
import { isDev } from './core';

const defaultProtocols = ['http', 'https'];

/** @type {import('unified').Plugin<[], import('hast').Root>} */
export default function rehypeInternalLinks(
  options: { basePath: string } = { basePath: '/' }
) {
  return (tree: any) => {
    visit(tree, 'element', (node) => {
      if (
        node.tagName === 'a' &&
        node.properties &&
        typeof node.properties.href === 'string' &&
        !(node.properties.href as string).startsWith('#') &&
        !isDev
      ) {
        const basePath = options.basePath;

        const url = node.properties.href;

        const protocol = url.slice(0, url.indexOf(':'));

        const protocols = defaultProtocols;

        if (
          !(isAbsoluteUrl(url)
            ? protocols.includes(protocol)
            : url.startsWith('//'))
        ) {
          node.properties.href = basePath + node.properties.href;
        }
      }
    });
  };
}
