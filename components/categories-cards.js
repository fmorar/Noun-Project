import PropTypes from "prop-types" 
import Image from 'next/image'
import Link from 'next/link'
import designDigital from '../pages/images/design-digital.png'
import designUx from '../pages/images/design-ux.png'
import designBrand from '../pages/images/design-brand.png'
import designMarketing from '../pages/images/design-marketing.png'

const cards = [
  {
    alt: '',
    href: '/',
    src: designDigital,
    title: 'Digital Design'
  },
  {
    alt: '',
    href: '/',
    src: designUx,
    title: 'UX | UI Designn'
  },
  {
    alt: '',
    href: '/',
    src: designBrand,
    title: 'Brand Design'
  },
  {
    alt: '',
    href: '/',
    src: designMarketing,
    title: 'Marketing Design'
  }
]

const CategoriesCards = ({href}) => {
  return (
    <div className='d-flex flex-wrap justify-content-between mb-medium'>
      {
        cards.map((item, index) => (
          <Link href={item.href} key={index}>
            <a className='link-clear mb-large category-card'>
              <Image className='category-card__img' src={item.src} alt={item.alt}/>
              <p className=' mb-large category-card__title'>
                {item.title}
              </p>
            </a>
          </Link>
        ))
      }
      
    </div>
  )
}

CategoriesCards.propTypes = {
  href: PropTypes.string,
};

CategoriesCards.defaultProps = {
  href: '',
};

export default CategoriesCards;