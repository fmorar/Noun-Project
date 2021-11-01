import Head from 'next/head'
import Layout from '../components/layout'
import Hero from '../components/hero'
import AboutUs from '../components/about-us'

const Index = () => {
  return (
    <>
      <Layout>
        <Head>
          <title>About Us</title>
        </Head>
        <Hero className='hero__title' spanBot='noun project' text='about us'/>
        <AboutUs />
      </Layout>
    </>
  )
};

export default Index;
