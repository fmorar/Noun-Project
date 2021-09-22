
import tw from '../pages/images/social-bg-twitter.svg'
import fb from '../pages/images/social-bg-facebook.svg'
import ig from '../pages/images/social-bg-instagram.svg'
import be from '../pages/images/social-bg-behance.svg'
import db from '../pages/images/social-bg-dribbble.svg'
import SocialIcons from '../components/social-icons'

const SocialBot = () => {

  const socialEl = [
    {
      img: tw,
      alt: 'tw',
      href: '/'
    },
    {
      img: fb,
      alt: 'fb',
      href: '/'
    },
    {
      img: ig,
      alt: 'ig',
      href: '/'
    },
    {
      img: be,
      alt: 'be',
      href: '/'
    },
    {
      img: db,
      alt: 'db',
      href: '/'
    }
  ]

  return (
    <section className='container social-bot'>
      <div className='social-bot__left'>
        <h5 className='mb-small'>
        Wanna build something great together?
        </h5>
        <h5>
          Let´s talk
        </h5>
        <p className='mb-large'>
          hello@nounproject.com.ar
        </p>
        <SocialIcons className='pepe' social={socialEl}/>
      </div>
      <div className='social-bot__right'>
        <p>
        Costa Rica
        </p>
        <span className='d-block mb-medium'>
          San José
        </span>
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
    </section>
  );
}

export default SocialBot;
