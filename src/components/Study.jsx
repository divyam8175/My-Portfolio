import React from 'react';
// import './education.css'; // Assuming you have a CSS file for styling
import education from "./data/education.json"; // Adjust the path as necessary

const Study= () => {
    return (
        <>
        <div className="container skill">
            <h1>EDUCATION</h1>
            <div className="items">
                {
                    education.map((data) => (
                        <>
                        <div>
                            <h1>{data.Course}</h1>
                            <p>{data.institution}</p>
                            <p>{data.duration}</p>
                            <p>{data.Percentage}</p>
                        </div>
                        </>
                    ))}
            </div> 
        </div>
        </>
    );
};

export default Study;