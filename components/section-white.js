import PropTypes from "prop-types"
import Image from "next/image";

const SectionBlack = ({className, title, decoration, alt, children}) => {
  let space;

  if (decoration != '') {
    space = `section-white ${className}`
  } else {
    space = `section-white mb-medium ${className}`
  }

  return (
    <section className={space}>
      <h4 className='text-center mb-small container'>
        {title}
      </h4>
      {children}
      { decoration != '' ?
      <div className='section-black__dec'>
        <Image src={decoration} alt={alt}/>
      </div>
      : null}
    </section>
  );
};

SectionBlack.propTypes = {
  title: PropTypes.string.isRequired,
  decoration: PropTypes.string,
  alt: PropTypes.string,
  children: PropTypes.node
};

SectionBlack.defaultProps = {
  decoration: '',
  alt: 'decoration iamges',
  children: null
};

export default SectionBlack;
