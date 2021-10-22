import PropTypes from 'prop-types'
import Social from '../components/social'
import Button from './buttons';
import Image from 'next/image';
import arrow from '../pages/images/arrow-bot.svg'

const Hero = ({className, spanTop, spanBot, text, page}) => {
  let titleMax;
  if ( page == 'landing') {
    titleMax = 'hero__title--max';
  }
  return (
    <>
      <div className='container hero'>
        <Social/>
        <div>
          <h1 className={`${className} ${titleMax}`}>
            <span>{spanTop}</span> {text} <span className='span-bot'>{spanBot}</span>
          </h1>
          {
            page == 'landing' ? 
            <Button className='btn btn--go btn-principal' href='/'>
              Let´s work together
            </Button>
            :
            null
          }
        </div>
      </div>
    </>
  );
};

Hero.propTypes = {
  className: PropTypes.string,
  spanTop: PropTypes.string,
  spanBot: PropTypes.string,
  text: PropTypes.element.isRequired,
  page: PropTypes.string
};

Hero.defaultProps = {
  className: '',
  spanTop: '',
  spanBot: '',
  page: 'page',
};

export default Hero;