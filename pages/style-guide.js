import Head from 'next/head';
import Link from 'next/link'
import Layout from '../components/layout'
import Button from '../components/buttons'
import Social from '../components/social'

const StyleGuide = () => {
  return (
    <Layout>
      <Head>
        <title>Style Guide</title>
      </Head>
      <h1>Style Guide</h1>
      <div>
        <h2>
          Forms
        </h2>
        <form>
          <label htmlFor="fname">Name</label>
          <input type="text" placeholder="Jonn Smith" id="fname" name="fname"/>
          <label htmlFor="email">Email</label>
          <input type="email" placeholder="email@gmail.com" id="email" name="email"/>
          <label htmlFor="phone">phone number</label>
          <input type="tel" placeholder="506 888888" id="phone" name="phone"/>
          <label htmlFor="w3review">Review of W3Schools:</label>
          <textarea id="w3review" placeholder="Write about your project" name="w3review" rows="4" cols="50">
          </textarea>
          <input type="submit" value="Send"/>
        </form>
      </div>
      <div>
        <h1 className="h1--max">Heading </h1>
        <h1>Heading </h1>
        <h2>Heading </h2>
        <h3>Heading </h3>
        <h4>Heading </h4>
        <h5>Heading </h5>
        <h6>Heading </h6>
      </div>
      <div>
        <h2>
          Links
        </h2>
        <Link href="/">
          <a>Home</a>
        </Link>
      </div>
      <div>
        <h2>
          Buttons
        </h2>
        <Button className="btn btn-principal" href="/" >
          Let´s work together
        </Button>
        <Button className="btn btn--go btn-principal" href="" >
          Let´s work together
        </Button>
        <Button className="btn btn-secondary btn-secondary--w" href="/" >
          Let´s work together
        </Button>
        <Button className="btn btn-secondary btn-secondary--b" href="" >
          Let´s work together
        </Button>
        <br/><br/><br/><br/><br/><br/>
        <Social href="/reinaldo"/>
      </div>
      <footer>
        <br/><br/><br/>
        Footer
        <br/><br/><br/>
      </footer>
    </Layout>
  )
};

export default StyleGuide;
