import type { AppProps } from 'next/app';

// import '@/styles/prism-one-dark.css';
import '@/styles/globals.css';
import '/fonts/neodgm_pro/style.css';

import 'galmuri/dist/galmuri.css';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
