import React from "react";
import "./Project.css";
import { SiHtml5 } from "react-icons/si";
import { DiCss3,DiRequirejs,DiMongodb, DiReact } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
import { FcOnlineSupport } from 'react-icons/fc'
import { SiExpress, SiChakraui } from "react-icons/si";
import ubuy from '../../Assets/ubuy.gif'
import Sephora from '../../Assets/Sephora.gif'
import youtube from '../../Assets/youtube.gif'
import Indiamart from '../../Assets/Indiamart.gif'
export const Projects = () => {
  return (
    <>
      <div className="section" id="project">
        <h2 className="section__title different" data-aos="fade-right">
          {'< '}<strong>Projects</strong>{' />'}
        </h2>
        {/* first one */}
        {/* <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right"   data-aos-anchor-easing='ease-in-out'>
                <img
                  src={Indiamart}
                  alt="gif"
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-left"   data-aos-anchor-easing='ease-in-out'>
              <h2>Sephora Clone</h2>
              <div>
                <p>
                Sephora is an E-Commerce website with a variety of products related to beauty and skincare.
                </p>
                <p>
                This was a group project of 5 team members.
              </p>
              </div>
              <div>
                <SiChakraui />
                <DiReact />
                <DiCss3 />
                <DiMongodb />
                <SiExpress />
              </div>
              <div>
                <a
                  href="https://web-jinke-music.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="btn btn--outline onbt">
                    See this Live
                  </button>
                </a>
                <a
                  href="https://github.com/BhaveshSuthar00/soundCld-client-side"
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
        {/* second one */}
        {/* <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src={Sephora}                  
                  alt="gitcard gif"
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-left" >
              <h2>Gift-card Clone</h2>
              <div>
              <p>
              Gift-card is a e-commerce website, It is an online 
              gift-card retailer based in Pittsburgh, Pennsylvania. It is considered the
              largest online gift card retailer and has appeared on the Inc.
              </p>
              <p>
                This was a group project and contributors are Yash, Kartik, Sumit, Mayar and Ankit
              </p>
              </div>
              <div>
                <SiHtml5 />
                <DiCss3 />
                <DiRequirejs />
                <IoLogoJavascript />
                <DiMongodb />
                <SiExpress />
              </div>
              <div>
                <a
                  href="https://enigmatic-beach-48011.herokuapp.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="btn btn--outline onbt">
                    See this Live
                  </button>
                </a>
                <a
                  href="https://github.com/BhaveshSuthar00/GiftCart-clone"
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
          {/* third one */}
          <div className="projects_container">
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
        </div>

        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right" >
                <img
                  src={Indiamart}
                  alt="ubuy gif"
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-left">
              <h2>IndiaMart Clone</h2>
              <div>
              <p>
              IndiaMart is an E-Commerce website that connects buyers with suppliers.

              </p>
              
              <p>
              Features :

              <p>
              Sign-in and sign-up, Floating navbar, Product page, Dynamic items page
              </p>

                
              </p>
                
              <p>
              Areas of Responsibility:
              <p>

              Worked on a Homepage.
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
                  href="https://realindiamart.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="btn btn--outline onbt">
                    See this Live
                  </button>
                </a>
                <a
                  href="https://github.com/raus376/IndiaMart_Website"
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
        </div>

          {/* forth one */}
          <div className="projects_container">
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
        </div>
        
      </div>
    </>
  );
};
