import PropTypes from "prop-types"
import Image from 'next/image'

const ServiceItem = ({title, text, src, alt}) => {
  return (
    <>
      <div className="text-center">
        <div className="image-container">
            <Image src={src} alt={alt} />
        </div>
        <h6 className="text-white">{title}</h6>
        <p>{text}</p>
      </div>
    </>
  )
}

ServiceItem.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
};

export default ServiceItem;