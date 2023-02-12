import Image from 'next/image';

import Layout from '@/components/layouts/Layouts';

function HomePage() {
  return (
    <Layout title="Home Page">
      <p>Welcome to Next.js blog!</p>
      <Image
        width={400}
        height={400}
        src="/images/paper-dark.png"
        alt="paper"
        placeholder="blur"
      />
    </Layout>
  );
}

export default HomePage;
