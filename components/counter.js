const Counter = ({projects, designers, years, website, aplications}) => {
  const counters = [
    projects,
    designers,
    years,
    website,
    aplications
  ];
  const speed = 200;

  counters.forEach((counter) => {
    // const animate = () => {
    //   const value = +counter.getAttribute("akhi");
    //   const data = +counter.innerText;

    //   const time = value / speed;
    //   if (data < value) {
    //     counter.innerText = Math.ceil(data + time);
    //     setTimeout(animate, 1);
    //   } else {
    //     counter.innerText = value;
    //   }
    // };

    // animate();
  });

  return (
    <>
      <div className="container mb-x-large counter">
        <div className='counter__category'>
          <p akhi={projects}>
            197
          </p>
          <span>Digital Projects</span>
        </div>
        <div className='counter__category'>
          <p akhi={designers}>
            7
          </p>
          <span>Designers</span>
        </div>
        <div className='counter__category'>
          <p akhi={years}>
            6
          </p>
          <span>Years of work</span>
        </div>
        <div className='counter__category'>
          <p akhi={website}>
            21
          </p>
          <span>Website Pages</span>
        </div>
        <div className='counter__category'>
          <p akhi={website}>
            33
          </p>
          <span>Mobile Aplications</span>
        </div>
      </div>
    </>
  );
}

export default Counter;