import Image from 'next/image'
import Link from 'next/link';
import logo from '../pages/images/logo-footer.png'

const Footer = () => {
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
        </div>
      </div>
    </footer>  
  ); 
}

export default Footer;