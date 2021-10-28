import PropTypes from "prop-types"

const SocialIcons = ({className, social}) => {

  return (
    <div className={className}>
      {
        social.map((item, index) => (
          <div key={index}>
            <a href={item.href} className='link-clear'>
              <img src={item.img.src} alt={item.alt}/>
            </a>
          </div>
        ))
      }
    </div>
  );
}

SocialIcons.propTypes = {
  className: PropTypes.string,
  social:PropTypes.array
};

SocialIcons.defaultProps = {
  className: ''
};

export default SocialIcons;