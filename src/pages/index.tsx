import Image from 'next/image';

import Layout from '@/components/layouts/Layouts';
import { useTheme } from 'next-themes';

function HomePage() {
  const { theme } = useTheme();
  return (
    <Layout title="Home">
      <p>Welcome to Next.js blog!</p>
      {theme === 'dark' ? (
        <Image
          width={400}
          height={400}
          src={`/images/paper-light.png`}
          alt="paper"
          placeholder="blur"
        />
      ) : (
        <Image
          width={400}
          height={400}
          src={`/images/paper-dark.png`}
          alt="paper"
          placeholder="blur"
        />
      )}
    </Layout>
  );
}

export default HomePage;
