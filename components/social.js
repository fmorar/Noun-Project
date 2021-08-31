/* eslint-disable @next/next/link-passhref */
import PropTypes from 'prop-types';
import Image from 'next/image'
import Link from 'next/link';
import behance from '../pages/images/social-behance.svg'
import dribbble from '../pages/images/social-dribbble.svg'
import facebook from '../pages/images/social-facebook.svg'
import instagram from '../pages/images/social-instagram.svg'
import twitter from '../pages/images/social-twitter.svg'

const Social = ({ href}) => (
  <>
    <div className='social d-flex align-items-center'>
      <div>
        <Link href={href}>
          <a>
            <Image src={behance} alt='Picture of the author' />
          </a>
        </Link>
        <Link href={href}>
          <a>
            <Image src={dribbble} alt='Picture of the author' />
          </a>
        </Link>
        <Link href={href}>
          <a>
            <Image src={facebook} alt='Picture of the author' />
          </a>
        </Link>
        <Link href={href}>
          <a>
            <Image src={instagram} alt='Picture of the author' />
          </a>
        </Link>
        <Link href={href}>
          <a>
            <Image src={twitter} alt='Picture of the author' />
          </a>
        </Link>
      </div>
      <div>
        <p className='social__text'>
          FOLLOW US
        </p>
      </div>
    </div>
  </>
);

Social.propTypes = {
  href: PropTypes.string
};

Social.defaultProps = {
  href: ''
};

export default Social;
