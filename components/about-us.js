/* eslint-disable react/no-unescaped-entities */
import Footer from './footer'
import Image from 'next/image'
import Counter from './counter'
import TeamCard from './TeamCard'
import designDigital from '../pages/images/design-digital.png'
import mission from '../pages/images/mission.png'
import values from '../pages/images/values.png'
import divider from '../pages/images/divider.png'
import video from '../pages/images/video-about-us.png'
import fabian from '../pages/images/team-card.png'

const AboutUs = () => {
  return (
    <>
      <div>
        <div className="mb-large">
          <p className='text-center text-width-small mb-large text-left-mobile'>
          Only special people are able to create unique things. Those who are not afraid. Those who compete with themselves and others. Those who move not in a circle, but upwards.
          </p>
        </div>
        <section className="container mb-large">
          <div className='d-flex mb-medium flex-wrap-reverse-mobile'>
            <div className='w-50 w-100-mobile'>
              <h3 className='text-with-border'>Company</h3>
              <h3>Culture</h3>
              <p>
                We're looking for the best thinkers, designers and educators to help us imagine the new and reimagine the established. We're looking for the best thinkers, designers and educators to help us imagine the new and reimagine the established. 
              </p>
            </div>
            <div className='d-flex justify-content-between p-40 p-0-mobile'>
              <div className='cards-about-us'>
                <Image src={designDigital} alt='Design Digital'/>
                <p className='text-center text-bold'>
                  Progress
                </p>
              </div>
              <div className='cards-about-us'>
                <Image src={designDigital} alt='Design Digital'/>
                <p className='text-center text-bold'>
                  Opportunities
                </p>
              </div>
            </div>
          </div>
        </section>
        <div>
          <Counter projects='500' designers='500' years='500' website='500' aplications/>
        </div>
        <section>
          <div className="container mb-large">
            <div className="d-flex flex-wrap-wrap-mobile">
              <div>
                <Image src={mission} alt='mission'/>
                <div className='container-values-mission'>
                  <div>
                    <h6 className='text-right'>Values</h6>
                    <p className='text-right'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus enim faucibus sed pulvinar cras ornare.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus enim faucibus sed pulvinar cras ornare. </p>
                  </div>
                </div>
              </div>
              <div className="divider-about-us">
                <Image src={divider} alt='divider' layout='fixed'/>
              </div>
              <div>
                <div className='container-values-mission'>
                  <div>
                    <h6>Mission</h6>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus enim faucibus sed pulvinar cras ornare.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus enim faucibus sed pulvinar cras ornare. </p>
                  </div>
                </div>
                <Image src={values} alt='values'/>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container mb-large">
            <div className="mb-medium">
              <h5 className="text-center">About</h5>
              <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fringilla leo, pellentesque ut. Lacus at faucibus enim imperdiet. Lectus consectetur lacus volutpat quis. Sapien sit tortor auctor odio condimentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fringilla leo, pellentesque ut. Lacus at faucibus enim imperdiet. Lectus consectetur lacus volutpat quis. Sapien sit tortor auctor odio condimentum.</p>
            </div>
            <div className="card-about-us">
              <Image src={video} alt='video'/>
            </div>
          </div>
        </section>
        <section>
          <div className="container mb-large">
            <div className="d-flex justify-content-between header align-items-end mb-medium flex-wrap-wrap-mobile">
              <div>
                <h3 className='text-with-border'>Our</h3>
                <h3>Team</h3>
              </div>
              <div>
                <a className="mr-2">All</a>
                <a className="mr-2">Costa Rica</a>
                <a className="mr-2">Argentina</a>
                <a className="mr-2">Mexico</a>
              </div>
            </div>
            <div className="d-flex justify-content-between mb-medium flex-wrap-wrap-mobile justify-content-center-mobile">
              <div className="mb-small">
                <TeamCard src={fabian} name='Fabian Mora' position="Senior UI/UX Designer" subposition="Front End Engineer" />
              </div>
              <div className="mb-small">
                <TeamCard src={fabian} name='Alexis Pizarro' position="Senior UI/UX Designer" />
              </div>
              <div className="mb-small">
                <TeamCard src={fabian} name='Lisandro Bigi' position="Front End Engineer" />
              </div>
            </div>
            <div className="d-flex justify-content-between flex-wrap-wrap-mobile justify-content-center-mobile">
              <div className="mb-small">
                <TeamCard src={fabian} name='Fabian Mora' position="Senior UI/UX Designer" subposition="Front End Engineer" />
              </div>
              <div className="mb-small">
                <TeamCard src={fabian} name='Fabian Mora' position="Senior UI/UX Designer" subposition="Front End Engineer" />
              </div>
              <div className="mb-small">
                <TeamCard src={fabian} name='Fabian Mora' position="Senior UI/UX Designer" subposition="Front End Engineer" />
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer/>
    </>
  )
};

export default AboutUs;