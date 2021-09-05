import PropTypes from "prop-types"
import Image from "next/image";

const SectionBlack = ({title, decoration, alt, children}) => {
  let space;

  if (decoration != '') {
    space = 'sectionB-black mb-xx-large'
  } else {
    space = 'sectionB-black mb-x-large'
  }

  return (
    <section className={space}>
      <h4 className='text-center mb-small'>
        {title}
      </h4>
      {children}
      <div className='sectionB-black__dec'>
        <Image src={decoration} alt={alt}/>
      </div>
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
