import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/Pro1.png";
import projImg2 from "../assets/img/Pro2.png";
import projImg3 from "../assets/img/Pro3.png";
import projImg4 from "../assets/img/Pro4.png";
import projImg5 from "../assets/img/Pro5.png";
import projImg6 from "../assets/img/Pro6.png";
import projImg7 from "../assets/img/Pro7.png";
import projImg8 from "../assets/img/Pro8.png";
import projImg9 from "../assets/img/Pro9.png";
import projImg10 from "../assets/img/Pro10.png";
import projImg11 from "../assets/img/Pro11.png";
import projImg12 from "../assets/img/Pro12.png";
import projImg13 from "../assets/img/Pro13.png";
import projImg14 from "../assets/img/Pro14.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const tab1projects = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
      link: "https://website-ochre-pi-61.vercel.app/",
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
      link: "https://visionarytechmate.netlify.app/",
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
      link: "https://firstaidboxx.netlify.app/",
    },
    {
      title: "Weather App",
      description: "Design & Development",
      imgUrl: projImg4,
      link: "https://aniketraj1615.github.io/weather_web/",
    },
    {
      title: "News App",
      description: "Design & Development",
      imgUrl: projImg5,
      link: "https://github.com/aniketraj1615/News",
    },
    {
      title: "Text Help",
      description: "Design & Development",
      imgUrl: projImg6,
      link: "https://github.com/aniketraj1615/TextHelp",
    },
    
  ];
  const tab2projects = [
    {
      title: "Movie Filter",
      description: "Design & Development",
      imgUrl: projImg7,
      link: "https://tv-maze-ebon.vercel.app/",
    },
    {
      title: "Dice Game",
      description: "Design & Development",
      imgUrl: projImg8,
      link: "https://1-dice-game-tan.vercel.app/",
    },
    {
      title: "Drum Kit",
      description: "Design & Development",
      imgUrl: projImg9,
      link: "https://classy-babka-2950e0.netlify.app/",
    },
    {
      title: "Calc",
      description: "Design & Development",
      imgUrl: projImg10,
      link: "https://gleaming-pixie-a36f4e.netlify.app/",
    },
    {
      title: "Car Animation",
      description: "Design & Development",
      imgUrl: projImg11,
      link: "https://bright-fenglisu-cc4712.netlify.app/",
    },
    {
      title: "Analog Clock",
      description: "Design & Development",
      imgUrl: projImg12,
      link: "https://bucolic-llama-e821d0.netlify.app/",
    },
    
  ];
  const tab3projects = [
    {
      title: "Portfolio With HTML,CSS,JS",
      description: "Design & Development",
      imgUrl: projImg13,
      link: "https://aniketraj1615.github.io/Aniket/",
    },
    {
      title: "Web page layout with Bootstrap",
      description: "Design & Development",
      imgUrl: projImg14,
      link: "https://illustrious-gingersnap-a70542.netlify.app/",
    },
    
    
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Explore a diverse range of projects where HTML, CSS, React, and APIs seamlessly integrate to deliver dynamic web applications. Hosted with reliability on Vercel and Netlify, these projects showcase innovative solutions and user-centric design.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          tab1projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                        {
                          tab2projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <Row>
                        {
                          tab3projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="a"></img>
    </section>
  )
}
