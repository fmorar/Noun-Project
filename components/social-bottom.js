
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
      href: 'https://facebook.com/'
    },
    {
      img: fb,
      alt: 'fb',
      href: 'https://facebook.com/'
    },
    {
      img: ig,
      alt: 'ig',
      href: 'https://facebook.com/'
    },
    {
      img: be,
      alt: 'be',
      href: 'https://facebook.com/'
    },
    {
      img: db,
      alt: 'db',
      href: 'https://facebook.com/'
    }
  ]

  return (
    <section className='container  mb-large decoration-top-left-b decoration-bot-right-b social-bot'>
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
        <SocialIcons className='social-icons-color' social={socialEl}/>
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
