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
        src="https://picsum.photos/400/400?grayscale"
        alt="paper"
        placeholder="blur"
      />
    </Layout>
  );
}

export default HomePage;
