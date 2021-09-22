import Image from 'next/image'
import Link from 'next/link';
import logo from '../pages/images/logo-footer.png'
import SocialIcons from '../components/social-icons'
import tw from '../pages/images/social-gray-twitter.png'
import fb from '../pages/images/social-gray-facebook.png'
import ig from '../pages/images/social-gray-instagram.png'
import be from '../pages/images/social-gray-behance.png'
import db from '../pages/images/social-gray-dribbble.png'

const Footer = () => {
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

  return(
    <footer className='footer'>
      <div className='container footer__grid'>
        <div  className='footer__grid-copy'>
          <div className='mb-small'>
            <Image src={logo} alt='Main Logo'/>
          </div>
          <div>
            <span className='d-block mb-small'>
              <Link href='/'>
                <a className='link-clear'>
                  Quality Policy | Privacy Policy Terms and Conditions
                </a>
              </Link>
            </span>
            <span>
              © 2021 Noun Project
            </span>
          </div>
        </div>
        <div className='footer__grid-nav'>
          <Link href='/'>
            <a className='link-clear'>
              Work
            </a>
          </Link>
          <Link href='/'>
            <a className='link-clear'>
              Services
            </a>
          </Link>
          <Link href='/'>
            <a className='link-clear'>
              About Us
            </a>
          </Link>
          <Link href='/'>
            <a className='link-clear'>
              Join
            </a>
          </Link>
          <Link href='/'>
            <a className='link-clear'>
              Contact Us
            </a>
          </Link>
        </div>
        <div className='footer__grid-social'>
          <p>
            Stay up to date
          </p>
          <div className='news-letter'>
            <form>
              <input placeholder='Your email adress'></input>
            </form>
          </div>
          <SocialIcons className='social-icons-color' social={socialEl}/>
        </div>
      </div>
    </footer>  
  ); 
}

export default Footer;