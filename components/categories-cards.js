import PropTypes from "prop-types" 
import Image from 'next/image'
import Link from 'next/link'
import designDigital from '../pages/images/design-digital.png'

const cards = [
  {
    href: '/',
  }
]

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