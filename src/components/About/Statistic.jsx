import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
const Statistic = () => {
    const [data, setData] = useState([
        '1200+ Hour of Full Stack Coading',
        '300+ DSA Problems',
        '400+ Git Commits',
        '10+ Projects',
        '100+ Hour of Soft Skills'
    ])
    return (
        <>
            <h1 className="project-heading" data-aos='fade-left' style={{marginTop: '4%'}}>
                Stati<strong className="purple">stic </strong>
            </h1>
            <div className="statistic">
                {
                    data  && data.map((item)=> <div key={uuid()}>
                        <h5>{item}</h5>
                    </div>)
                }
            </div>
        </>
    )
}
export default Statistic;