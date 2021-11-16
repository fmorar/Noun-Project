import Head from 'next/head'
import Layout from '../components/layout'
import Hero from '../components/hero'
import Landing from '../components/landing'

const Index = () => {
  return (
    <>
      <Layout>
        <Head>
          <title>Home</title>
        </Head>
        <Hero page='landing' className='hero__title' spanTop='noun' text='project'/>
        <Landing />
      </Layout>
    </>
  )
};

export default Index;
