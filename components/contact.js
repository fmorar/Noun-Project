import ContactImage from '../pages/images/contact-us.svg'
import Footer from './footer'
import Image from 'next/image';
import ContactForm from './contact-form'

const Contact = () => {
  return (
    <>
      <div className="d-flex justify-content-center mb-small">
        <Image src={ContactImage} alt='Contact Image' />
      </div>
      <div className="d-flex justify-content-center mb-large">
        <h5>Get a Design Consultation</h5>
      </div>
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
      <Footer/>
    </>
  )
};

export default Contact;