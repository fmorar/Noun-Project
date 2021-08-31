import Image from 'next/image';
import Link from 'next/link'
import Button from './buttons';
import Menu from '../components/menu'
import logo from '../pages/images/social-dribbble.svg'
import commerce from '../pages/images/commerce.svg'

const Header = () => {
  return (
    <div className='header-wrapper'>
      <header className='d-flex  justify-content-between align-items-center header'>
        <div>
          <Link href={'/'}>
            <a className='link-clear header__logo'>
              <Image src={logo} alt='Picture of the author' />
              Noun Project
            </a>
          </Link>
        </div>
        <div className='d-flex header__actions'>
          <div className='header__actions-comm' >
            <Image src={commerce} alt='Picture of the author' />
          </div>
          <div  className='header__actions-menu'>
            <Menu/>
          </div>
          <Button className="btn btn--go btn-principal mobile-hide header__actions-cta" href="/">
            Contact Us
          </Button>
        </div>
      </header>
    </div>
  );
};

export default Header;
