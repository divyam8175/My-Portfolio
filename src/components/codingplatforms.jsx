import React from 'react'
import Coding from './data/coding.json'
 const Cod = () => {
  return (
    <>
    <div className="container skill" >
        <h1>CODING PLATFORMS</h1>
        <div className="items">
        {Coding.map((data) => (
                <>
                <div className="item" key={data.id}
                data-aos="flip-left"
                data-aos-duration="1000"
                >
                        <a href={data.link} target="_blank"><img  src={`${data.imageSrc}`} alt="" /></a>
                        <h3>{data.title}</h3>
                </div>
                </>
            ))}
        </div>
    </div>
    </>
  );
};

export default Cod
