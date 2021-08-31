import CategoriesCards from "./categories-cards";

const Landing = () => {
  return (
    <>
      <div className='text-center'>
        <h4>
          Our Work
        </h4>
        <p className='text-width-small mb-large'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus enim faucibus sed pulvinar cras ornare. Enim, euismod vestibulum, neque non fermentum sit.
        </p>
        <CategoriesCards/>
        <h4>
          Design your business
        </h4>
        <p className='text-width-small'>
          We design new experience from physical and digital products and the company overall. We create brands that are attached to people, new, useful and unique products.
        </p>
        <p className='text-width-small mb-large'>
          We believe in business and help invest in design with multiple returns. We work so that our customers develop faster than competitors.
        </p>
      </div>
    </>
  )
};

export default Landing;