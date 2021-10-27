import {useState} from 'react'
import Image from 'next/image';
import Link from "next/link";
import PropTypes from "prop-types"
import menu from '../pages/images/menu-icon.svg'
import exit from '../pages/images/exit.png'
import SocialIcons from '../components/social-icons'
import commerce from '../pages/images/commerce.svg'
import tw from '../pages/images/social-twitter.svg'
import fb from '../pages/images/social-facebook.svg'
import ig from '../pages/images/social-instagram.svg'
import be from '../pages/images/social-behance.svg'
import db from '../pages/images/social-dribbble.svg'

const Menu = ({className}) => {
  const socialEl = [
    {
      img: tw,
      alt: 'tw',
      href: 'http://localhost:3000/'
    },
    {
      img: fb,
      alt: 'fb',
      href: 'http://localhost:3000/'
    },
    {
      img: ig,
      alt: 'ig',
      href: 'http://localhost:3000/'
    },
    {
      img: be,
      alt: 'be',
      href: 'http://localhost:3000/'
    },
    {
      img: db,
      alt: 'db',
      href: 'http://localhost:3000/'
    }
  ]

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open)
  }

  return (
    <>
      <Image onClick={handleOpen} className={className} src={menu} alt='Main menu'/>
      <nav className={`menu-ham ${open ? 'menu-ham--open' : ''}`} >
        <div className='menu-ham-wrapp'>
          <div className='menu-ham__icons'>
            <Image className='menu-ham__icons-comm'src={commerce} alt='Picture of the author' />
            <Image  onClick={handleOpen} className={className} src={exit} alt='Main menu'/>
          </div>
          <div className='menu-ham__items'>
            <Link href={'/'}>
              <a className='link-clear' onClick={handleOpen}>Home</a>
            </Link>
            <Link href={'/style-guide'}>
              <a className='link-clear' onClick={handleOpen}>About Us</a>
            </Link>
            <Link href={'/style-guide'}>
              <a className='link-clear' onClick={handleOpen}>Contact Us</a>
            </Link>
            <Link href={'/style-guide'}>
              <a className='link-clear' onClick={handleOpen}>Join</a>
            </Link>
            <Link href={'/style-guide'}>
              <a className='link-clear' onClick={handleOpen}>Services</a>
            </Link>
            <Link href={'/style-guide'}>
              <a className='link-clear' onClick={handleOpen}>Shop</a>
            </Link>
            <Link href={'/style-guide'}>
              <a className='link-clear' onClick={handleOpen}>Work</a>
            </Link>
          </div>
          <div className='menu-ham__social'>
            <SocialIcons className='social-icons-color' social={socialEl}/>
          </div>
        </div>
      </nav>
    </>
  );
};


Menu.propTypes = {
  className: PropTypes.string,
  open: PropTypes.bool
};

Menu.defaultProps = {
  className: '',
  open: false
};

export default Menu;
