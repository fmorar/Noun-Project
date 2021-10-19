import Footer from './footer'
import ColTwo from './col-img-text'
import ImageTools from '../pages/images/services-design.png'
import ImageDesign from '../pages/images/services-design-2.png'
import ImageUXUI from '../pages/images/ux-ui.png'
import ImageIconIllustration from '../pages/images/icon-illustration.png'
import ImageBranding from '../pages/images/branding.png'
import ContactForm from './contact-form'
import Image from 'next/image'
import Button from '../components/buttons'
import SectionBlack from './section-black'
import SectionWhite from './section-white'
import ServiceItem from './service-item'

const text = 'Experience our agile and forward-thinking environment as we create your rock-solid digital products. We help you launch your first MVP or scale your digital product.See our agile squads in action!'

const Work = () => {
  return (
    <>
      <div>
        <div>
          <p className='text-center text-width-small mb-large text-left-mobile'>
            Noun Project clients are ambitious entrepreneurs who create new, useful products. Design is a full-fledged part of these products or services. With its help, together with entrepreneurs, we create unique brands.
          </p>
        </div>
        <div className="container d-flex justify-content-around mb-medium flex-wrap-wrap-mobile">
          <div className="p-40">
            <Image src={ImageDesign} alt='Design Digital'/>
          </div>
          <div className="w-50 w-100-mobile">
            <div>
              <h6>Strategy</h6>
              <p>Only after examining the target audience and decomposing the brand on emotions, images and benefits, have the concept of positioning formulated, we will create a product that will be in demand on the market.</p>
            </div>
            <div>
              <h6>Identity</h6>
              <p>When developing identity, we follow two main principles: identity must correspond to the brand and be unique. Therefore, we don`t worship design trends and don`t copy our competitors, but look for a unique brand metaphor that will unfold itself on brand’s visual carriers.</p>
            </div>
            <div>
              <h6>Digital</h6>
              <p>The digital environment has become essential for brand communication, advertising and sale of goods and services. A digital product, either website or application, must have a working and improved interaction experience (UX), as well as an emotional, involving user interface (UI).</p>
            </div>
          </div>
        </div>
        <ColTwo title='Design your business' text={text} src={ImageTools} alt='image' imageSpace='left' />
        <SectionBlack className='decoration-top-left-w decoration-top-right-w' title='What we do'>
          <div className="d-flex container mb-medium flex-wrap-wrap-mobile w-50-mobile w-100">
            <ServiceItem title='UX/UI' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus enim faucibus sed' src={ImageUXUI} />
            <ServiceItem title='Icon/Illustration' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus enim faucibus sed' src={ImageIconIllustration} />
            <ServiceItem title='Branding' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus enim faucibus sed' src={ImageBranding} />
          </div>
          <div className="d-flex container flex-wrap-wrap-mobile w-50-mobile w-100">
            <ServiceItem title='UX/UI' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus enim faucibus sed' src={ImageUXUI} />
            <ServiceItem title='Icon/Illustration' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus enim faucibus sed' src={ImageIconIllustration} />
            <ServiceItem title='Branding' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus enim faucibus sed' src={ImageBranding} />
          </div>
        </SectionBlack>
        <SectionWhite className='decoration-top-left-w-white decoration-top-right-w-white' title='Wanna build something great together?'>
          <div className='d-flex justify-content-center'>
            <Button className="btn btn-secondary btn-secondary--w" href="/" >
              Let´s talk
            </Button>
          </div>
        </SectionWhite>
        <section>
          <div className='container mb-medium'>
            <h3>Get a Design</h3>
            <h3 className='text-with-border'>Consultation</h3>
          </div>
        </section>
        <div className="container d-flex justify-content-around mb-medium flex-wrap-reverse-mobile">
          <div className="d-grid w-80-mobile">
            <div>
              <h6>Email</h6>
              <a href="mailto:hello@nounproject.com.ar" className="border-none">hello@nounproject.com.ar</a>
            </div>
            <div>
              <h6>Phone</h6>
              <a href="tel:1125051997" className="border-none">1125051997</a>
            </div>
            <div>
              <h6>Location</h6>
              <div>
                <p>
                Costa Rica
                </p>
                <small className='d-block mb-medium'>
                  San José
                </small>
                <div className='countries'>
                  <span className='d-flex align-items-center justify-content-center country country--active'>
                    <span>
                      CR
                    </span>
                  </span>
                  <span className='d-flex align-items-center justify-content-center country'>
                    <span>
                      MX
                    </span>
                  </span>
                  <span className='d-flex align-items-center justify-content-center country'>
                    <span>
                      AR
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
};

export default Work;