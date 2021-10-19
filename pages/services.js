import Head from 'next/head'
import Layout from '../components/layout'
import Hero from '../components/hero'
import Services from '../components/services'

const Index = () => {
  return (
    <>
      <Layout>
        <Head>
          <title>Services</title>
        </Head>
        <Hero className='hero__title' spanBot='noun project' text='Services'/>
        <Services />
      </Layout>
    </>
  )
};

export default Index;
