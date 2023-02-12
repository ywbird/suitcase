import Image from 'next/image';

import Layout from '@/components/layouts/Layouts';

import config from '@/config.json';

function AboutPage() {
  return (
    <Layout title="About">
      <p>I&lsquo;m {config.nickname}</p>
      <Image
        width={400}
        height={400}
        src={config.avatar}
        alt="ywbird"
        placeholder="blur"
      />
    </Layout>
  );
}

export default AboutPage;
