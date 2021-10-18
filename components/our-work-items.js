import Button from './buttons';
import Image from 'next/image'
import searchIcon from '../pages/images/search.svg'
import soSure from '../pages/images/SoSure.png'
import datamynt from '../pages/images/Datamynt.png'
import arrow from '../pages/images/arrow-dark.svg'
import remitr from '../pages/images/remitr.png'
import chevron from '../pages/images/chevron-right.svg'

const OurWorkItems = () => {
  return (
    <div className="container">
        <div className="d-flex justify-content-between header align-items-center">
          <div>
            <a className="mr-2">Type of Industry</a>
            <a className="mr-2">Expertise</a>
            <a className="mr-2">All Work</a>
          </div>
          <div>
          <Button className="btn btn-principal header__actions-cta" href="/">
            <Image src={searchIcon} alt='Search Icon'/>
          </Button>
          </div>
        </div>
        <div className="d-flex justify-content-between align-items-center my-4 flex-wrap-wrap-mobile">
          <div className="card mr-2">
            <p className="mb-0">So Sure</p>
            <Image src={arrow} alt='arrow' layout='fixed' />
            <h4 className="main-title color-so-sure">Transforming the Insurance Industry</h4>
            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus enim faucibus sed pulvinar cras ornare. </span>
            <div className="d-flex justify-content-center">
              <Image src={soSure} alt='So Sure'/>
            </div>
          </div>
          <div className="card w-70-desktop">
            <p className="mb-0">Datamynt</p>
            <Image src={arrow} alt='arrow' layout='fixed' />
            <h4 className="main-title color-datamynt">Transforming the Banking Industry</h4>
            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus enim faucibus sed pulvinar cras ornare. </span>
            <div className="d-flex justify-content-center">
              <Image src={datamynt} alt='Datamynt'/>
            </div>
          </div>
        </div>
        <div>
          <div className="card-100 d-flex flex-wrap-wrap-mobile">
            <div className="w-50 d-grid">
              <p className="mb-0">Remitr</p>
              <Image src={arrow} alt='arrow' layout='fixed' />
              <h4 className="main-title color-remitr">Transforming the Financial Industry</h4>
              <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus enim faucibus sed pulvinar cras ornare. </span>
              <div>
                <Button className="btn btn--go btn-principal header__actions-cta" href="/">
                  Full Project
                </Button>
              </div>
            </div>
            <div className="d-flex justify-content-center">
              <Image src={remitr} alt='Remitr'/>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-between align-items-center my-4 flex-wrap-wrap-mobile">
          <div className="card mr-2">
            <p className="mb-0">So Sure</p>
            <Image src={arrow} alt='arrow' layout='fixed' />
            <h4 className="main-title color-so-sure">Transforming the Insurance Industry</h4>
            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus enim faucibus sed pulvinar cras ornare. </span>
            <div className="d-flex justify-content-center">
              <Image src={soSure} alt='So Sure'/>
            </div>
          </div>
          <div className="card w-70-desktop">
            <p className="mb-0">Datamynt</p>
            <Image src={arrow} alt='arrow' layout='fixed' />
            <h4 className="main-title color-datamynt">Transforming the Banking Industry</h4>
            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus enim faucibus sed pulvinar cras ornare. </span>
            <div className="d-flex justify-content-center">
              <Image src={datamynt} alt='Datamynt'/>
            </div>
          </div>
        </div>
        <div>
          <div className="card-100 d-flex flex-wrap-wrap-mobile">
            <div className="w-50 d-grid">
              <p className="mb-0">Remitr</p>
              <Image src={arrow} alt='arrow' layout='fixed' />
              <h4 className="main-title color-remitr">Transforming the Financial Industry</h4>
              <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus enim faucibus sed pulvinar cras ornare. </span>
              <div>
                <Button className="btn btn--go btn-principal mobile-hide header__actions-cta" href="/">
                  Full Project
                </Button>
              </div>
            </div>
            <div className="d-flex justify-content-center">
              <Image src={remitr} alt='Remitr'/>
            </div>
          </div>
        </div>
        <div className="my-4 d-flex justify-content-center">
          <a><span className="mr-2">View more projects</span><Image src={chevron} alt='chevron' layout='fixed' /></a>
        </div>
    </div>
  )
}

export default OurWorkItems;