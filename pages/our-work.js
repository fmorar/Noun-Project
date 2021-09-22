import Head from 'next/head'
import Layout from '../components/layout'
import Hero from '../components/hero'
import Work from '../components/Work'

const Index = () => {
  return (
    <>
      <Layout>
        <Head>
          <title>Our Work</title>
        </Head>
        <Hero className='hero__title' spanBot='noun project' text='Work'/>
        <Work/>
      </Layout>
    </>
  )
};

export default Index;
