import React from 'react';
import '../css/study.css'; // Assuming you have a CSS file for styling
import education from "./data/education.json"; // Adjust the path as necessary

const Study= () => {
    return (
        <>
        <div className="container1">
            <h1>EDUCATION</h1>
            <div className="container2">
                {
                    education.map((data) => (
                        <>
                        <div className="container3"
                key={data.id} data-aos="flip-left"
                data-aos-duration="1000">
                            <h2><b>{data.Course}</b></h2>
                            <h3>{data.stream}</h3>
                            <h4>{data.institution}</h4>
                            <h5>{data.duration}</h5>
                            <h6>{data.Percentage}</h6>
                        </div>
                        </>
                    ))}
            </div> 
        </div>
        </>
    );
};

export default Study;