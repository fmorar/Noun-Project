import PropTypes from "prop-types"
// import Image from 'next/image'

const SocialIcons = ({className, social}) => {
  console.log(className, social)
  return (
    <div className={className}>
      {
        social.map((item, index) => (
          <div key={index}>
            <p>{item.img.src}</p>
          </div>
        ))
      }
    </div>  
  );
}

SocialIcons.propTypes = {
  className: PropTypes.string
};

SocialIcons.defaultProps = {
  className: ''
};

export default SocialIcons;