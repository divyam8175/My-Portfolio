import React from 'react'
import Project from './data/project.json'

 const Pro = () => {
  return (
    <>
    <div className="constainer project" id="project"> 
        <h1>PROJECTS</h1>
        <div className="row d-flex justify-content-center align-items-center"> {
            Project.map((data) => (
                <>
                <div key={data.id} className="my-4 col-md-4 col-lg-3 col-sm-6 mx-3" >
                <div className="card bg-dark text-light" 
                style={{
                    width:" 18rem" ,
                    border:"1px solid yellow",
                    boxShadow:"5px 5px 10px 10px rgba(101, 175, 10, 0.5)"
                    }}
                    data-aos="flip-right"
                    data-aos-duration="1000"
                >
                    <div className="img d-flex justify-content-center align-items-center p-3">
                    <img src={data.imageSrc} class="card-img-top" alt="..."
                    style={{
                        height:"250px",
                        width:"250px",
                        border:"2px solid yellow",
                        borderRadius:"10px",
                    }}
                    />
                    </div>
                    <div className="card-body text-center">
                        <h5 className="card-title">{data.title}</h5>
                        <p className="card-text">{data.description}</p>
                        <a href={data.demo} class="btn btn-primary mx-3">Demo</a>
                        <a href={data.source} class="btn btn-warning">code</a>
                        </div>
                        </div>
                </div>
                </>
            ))}
        </div>
    </div>
    </>
  );
};

export default Pro;
