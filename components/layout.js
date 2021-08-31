import Head from 'next/head'
import Header from '../components/header'

const Layout = (porps) => {
  return (
    <div>
      <Head>
        <title>Title</title>
        <link href="https://fonts.googleapis.com/css2?family=Londrina+Outline&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,700;1,200&display=swap" rel="stylesheet"></link>
      </Head>
      <Header/>
      <main>
        {porps.children}
      </main>
    </div>
  )
}

export default Layout;