import PropTypes from "prop-types" 
import Image from 'next/image'
import Link from 'next/link'
import designDigital from '../pages/images/design-digital.png'
import designUx from '../pages/images/design-ux.png'
import designBrand from '../pages/images/design-brand.png'
import designMarketing from '../pages/images/design-marketing.png'

const CategoriesCards = ({href}) => {
  return (
    <div className='d-flex flex-wrap justify-content-between mb-medium'>
      <Link href={href}>
        <a className='link-clear mb-large category-card'>
          <div>
            <Image className='category-card__img' src={designDigital} alt='Design Digital'/>
            <p className=' mb-large category-card__title'>
              Digital Design
            </p>
          </div>
        </a>
      </Link>
      <Link href={href}>
        <a className='link-clear mb-large category-card'>
          <div>
            <Image className='category-card__img' src={designDigital} alt='Design Digital'/>
            <p className=' mb-large category-card__title'>
              Digital Design
            </p>
          </div>
        </a>
      </Link>
      <Link href={href}>
        <a className='link-clear mb-large category-card'>
          <div>
            <Image className='category-card__img' src={designDigital} alt='Design Digital'/>
            <p className=' mb-large category-card__title'>
              Digital Design
            </p>
          </div>
        </a>
      </Link>
      <Link href={href}>
        <a className='link-clear mb-large category-card'>
          <div>
            <Image className='category-card__img' src={designDigital} alt='Design Digital'/>
            <p className=' mb-large category-card__title'>
              Digital Design
            </p>
          </div>
        </a>
      </Link>
    </div>
  )
}

CategoriesCards.propTypes = {
  className: PropTypes.string,
  href: PropTypes.string,
  children: PropTypes.element.isRequired,
  target: PropTypes.string
};

CategoriesCards.defaultProps = {
  className: '',
  href: '',
  target: '_self'
};

export default CategoriesCards;