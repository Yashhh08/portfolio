import React from "react";
import "./Project.css";
import { holeThing } from "../../constants/constants";
import { v4 as uuid } from 'uuid' 
import Single from "./Single";
export const Projects = () => {
  return (
    <>
      <div className="section" id="project">
        <h2 className="section__title different" data-aos="fade-right">
          {'< '}<strong>Projects</strong>{' />'}
        </h2>
        {holeThing.map((items) => <Single key={uuid()} props={items}/>)}
        {/* second one */}
       
          {/* third one */}
          {/* <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right" >
                <img
                  src={Sephora}
                  alt="ubuy gif"
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-left">
              <h2>Sephora Clone</h2>
              <div>
              <p>
              Sephora is an E-Commerce website with a variety of products related to beauty and skincare.
              </p>
              
              <p>
              Features :

              <p>
              Multiple product pages, Dynamic items page, Cart page, Wishlist page, and Checkout section, Login and Sign-up, Filter and sort by different categories
              </p>

                
              </p>
                
              <p>
              Areas of Responsibility:

              <p>
              Led a team of six batchmates. 
                
                A collaborative project built by a team of five and
                executed in five days.
              </p>
                
              </p>

              </div>
              <div>
                <SiHtml5 />
                <DiCss3 />
                <IoLogoJavascript />
              </div>
              <div>
                <a
                  href="https://magenta-melba-85b7ee.netlify.app/homepage.html"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="btn btn--outline onbt">
                    See this Live
                  </button>
                </a>
                <a
                  href="https://github.com/Yashhh08/SEPHORA-Clone"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="btn btn--outline">
                    View Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div> */}
          {/* forth one */}
          {/* <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right"   data-aos-anchor-easing='ease-in-out'>
                <img
                  src={youtube}
                  alt="youtube gif"
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-left"   data-aos-anchor-easing='ease-in-out'>
              <h2>YouTube Clone</h2>
              <div>
                <p>
                  Youtube clone is my individual project. I created this when I was learning REST API.
                </p>
              </div>
              <div>
                <SiHtml5 />
                <DiCss3 />
                <IoLogoJavascript />
              </div>
              <div>
                <a
                  href="https://storied-biscuit-02cfea.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="btn btn--outline onbt">
                    See this Live
                  </button>
                </a>
                <a
                  href="https://github.com/Yashhh08/ES6-1-YouTube-"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button  className="btn btn--outline">
                    View Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div> */}
        
      </div>
    </>
  );
};
