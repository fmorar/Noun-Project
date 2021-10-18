import CategoriesCards from './categories-cards'
import Button from '../components/buttons'
import ColTwo from './col-img-text'
import ImageTools from '../pages/images/image-tools.png'
import ImagePc from '../pages/images/image-pc.png'
import SectionBlack from './section-black'
import Counter from './counter'
import SocialBot from './social-bottom'
import Footer from './footer'
import OurWorkItems from './our-work-items'

const text = `We design new experience from physical and digital products and the company overall. We create brands that are attached to people, new, useful and unique products.
We believe in business and help invest in design with multiple returns. We work so that our customers develop faster than competitors.`

const Work = () => {
  return (
    <>
      <OurWorkItems />
      <SocialBot/>
      <Footer/>
    </>
  )
};

export default Work;