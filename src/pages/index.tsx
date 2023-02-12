import Image from 'next/image';

import Layout from '@/components/layouts/Layouts';
import { useTheme } from 'next-themes';

function HomePage() {
  const { theme } = useTheme();
  return (
    <Layout title="Home">
      <p>Welcome to Next.js blog!</p>
      <Image
        width={400}
        height={400}
        src={`/images/paper-${theme === 'dark' ? 'light' : 'dark'}.png`}
        alt="paper"
        placeholder="blur"
      />
    </Layout>
  );
}

export default HomePage;
