import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import Head from 'next/head';

// import '@/styles/prism-one-dark.css';
import '@/styles/globals.scss';

import 'galmuri/dist/galmuri.css';
import 'neodgm-pro';

import SEO from '@/components/SEO';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <div>
        <Head>
          <SEO />
        </Head>
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  );
}
