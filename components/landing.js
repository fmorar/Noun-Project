import CategoriesCards from './categories-cards'
import Button from '../components/buttons'
import ColTwo from './col-img-text'
import ImageTools from '../pages/images/image-tools.png'
import ImagePc from '../pages/images/image-pc.png'
import SectionBlack from './section-black'
import Counter from './counter'
import SocialBot from './social-bottom'
import Footer from './footer'

const text = `We design new experience from physical and digital products and the company overall. We create brands that are attached to people, new, useful and unique products.
We believe in business and help invest in design with multiple returns. We work so that our customers develop faster than competitors.`

const Landing = () => {
  return (
    <>
      <div className='text-center container'>
        <h4>
          Our Work
        </h4>
        <p className='text-width-small mb-large'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus enim faucibus sed pulvinar cras ornare. Enim, euismod vestibulum, neque non fermentum sit.
        </p>
        <CategoriesCards/>
        <h4>
          Design your business
        </h4>
        <p className='text-width-small'>
          We design new experience from physical and digital products and the company overall. We create brands that are attached to people, new, useful and unique products.
        </p>
        <p className='text-width-small mb-large'>
          We believe in business and help invest in design with multiple returns. We work so that our customers develop faster than competitors.
        </p>
      </div>
      <ColTwo title='Design your business' text={text} src={ImageTools} alt='image' imageSpace='left' />
      <SectionBlack className='decoration-top-left-w decoration-top-right-w' title='Lets Work Together!' decoration={ImagePc} alt='computer image decoration'>
        <div className='d-flex justify-content-center'>
          <Button className="mb-large btn btn-secondary btn-secondary--b" href="/contact-us" >
            CONTACT US
          </Button>
        </div>
      </SectionBlack>
      <div className='container text-center'>
        <h4>
          About Us
        </h4>
        <p className='text-width-small'>
          We design new experience from physical and digital products and the company overall. We create brands that are attached to people, new, useful and unique products.
        </p>
        <p className='text-width-small mb-large'>
          In Noun Project work young professionals who are interested in modern culture, new products, fashion trends and approaches to create design. Our goal is to grow a professional community of designers and art directors.
        </p>
        <div className='d-flex justify-content-center mb-x-large'>
          <Button className="btn btn-secondary btn-secondary--w" href="/" >
            Get to know us!
          </Button>
        </div>
      </div>
      <Counter projects='500' designers='500' years='500' website='500' aplications/>
      <SocialBot/>
      <Footer/>
    </>
  )
};

export default Landing;