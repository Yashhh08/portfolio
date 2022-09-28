import { v4 as uuid } from 'uuid';
const Single = ({ props }) => {
    return (
        <div className="projects_container">
        <div className="project">
          <div className="project_videocontainer">
            <div data-aos="fade-right">
              <img
                src={props.gifSource}                  
                alt="gitcard gif"
              />
            </div>
          </div>
          <div className="project_information" data-aos="fade-left" >
            <h2>{props.headers}</h2>
            <div>
            <p>
                {
                    props.main
                }
            </p>
            <p>
                {
                    props.body
                }
            </p>
            </div>
            <div>
                {
                    props.icons && props.icons.map((item) => <i key={uuid()} className='icons-array'>{item}</i>)
                }
            </div>
            <div>
              <a
                href={props.liveCode}
                target="_blank"
                rel="noreferrer"
              >
                <button className="btn btn--outline onbt">
                  See this Live
                </button>
              </a>
              <a
                href={props.sourceCode}
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
    )
}
export default Single;