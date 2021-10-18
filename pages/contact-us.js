import Head from 'next/head'
import Layout from '../components/layout'
import Hero from '../components/hero'
import Contact from '../components/contact'

const ContactUs = () => {
  return (
    <>
      <Layout>
        <Head>
          <title>Contact Us</title>
        </Head>
        <Hero className='hero__title' spanBot='noun project' text='contact us'/>
        <Contact />
      </Layout>
    </>
  )
};

export default ContactUs;
