import PropTypes from "prop-types"
import Image from 'next/image'

const ColTwo = ({title, text, src, alt, imageSpace, direction}) => {
  let className = `container col-img-text mb-large ${direction}`
  return (
    <>
      <div className={className}>
        <div className='col-img-text__text'>
          <h2>
            {title}
          </h2>
          <p>
            {text}
          </p>
        </div>
        <div className='col-img-text__img'>
          <Image className={`col-img-text__image--${imageSpace}`} src={src} alt={alt} />
        </div>
      </div>
    </>
  )
}

ColTwo.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  src: PropTypes.object,
  alt: PropTypes.string,
  imageSpace: PropTypes.string,
  direction: PropTypes.string
};

ColTwo.defaultProps = {
  title: '',
  text: '',
  src: '',
  alt: '',
  imageSpace: '',
  direction: ''
};

export default ColTwo;