import PropTypes from "prop-types"
import Image from "next/image";

const SectionBlack = ({className, title, decoration, alt, children}) => {
  let space;

  if (decoration != '') {
    space = `section-black mb-xx-large ${className}`
  } else {
    space = `section-black mb-x-large ${className}`
  }

  return (
    <section className={space}>
      <h4 className='text-center mb-small'>
        {title}
      </h4>
      {children}
      <div className='section-black__dec'>
        <Image src={decoration} alt={alt}/>
      </div>
    </section>
  );
};

SectionBlack.propTypes = {
  title: PropTypes.string.isRequired,
  decoration: PropTypes.object,
  alt: PropTypes.string,
  children: PropTypes.node
};

SectionBlack.defaultProps = {
  decoration: '',
  alt: 'decoration iamges',
  children: null
};

export default SectionBlack;
