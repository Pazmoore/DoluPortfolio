import { Col, Container, Row, Tab, Nav } from "react-bootstrap";
import ProjectCard from "../Components/ProjectCard";
import colorSharp2 from "../Assets/img/color-sharp2.png";
import projImg1 from "../Assets/img/project-img1.png";
import projImg3 from "../Assets/img/project-img3.png";
import projImg4 from "../Assets/img/project-img4.png";
import projImg5 from "../Assets/img/project-img5.png";
import projImg6 from "../Assets/img/project-img6.png";
import projImg7 from "../Assets/img/project-img7.png";


const Project = () => {

    const projects = [
        {
            title: "Anime Website",
            description: "HTML & CSS",
            link: "https://github.com/Pazmoore/I-Love-Anime.git",
            imgUrl: projImg1,
        },
        {
            title: "To-Do-List",
            description: "HTML, CSS & JavaScript",
            link: "https://github.com/Pazmoore/to-do-list.git",
            link1: "https://pazmoore.github.io/to-do-list/",
            imgUrl: projImg4,
        },
        {
            title: "Quiz Website",
            description: "HTML, CSS & JavaScript",
            link: "https://github.com/Pazmoore/quiz.git",
            link1: "https://pazmoore.github.io/quiz//",
            imgUrl: projImg3,
        },
        {
            title: "Weather Website",
            description: "HTML, CSS & JavaScript",
            link: "https://github.com/Pazmoore/weather.git",
            link1:"https://pazmoore.github.io/weather/",
            imgUrl: projImg5,
        },
        {
            title: "SignUP-LoginIN Form",
            description: "React.Js & Vite",
            link: "https://github.com/Pazmoore/react-sign-up-form.git",
            imgUrl: projImg7,
        },
        {
            title: "News Website",
            description: "React.Js & BootStrap",
            link: "https://pazmoore.github.io/to-do-list/",
            imgUrl: projImg6,
        },
    ];

  return (
    <section className="project" id="project">
        <Container>
            <Row>
                <Col>
                <h2>Projects</h2>
                <p>About Projects</p>
                <Tab.Container id="projects-tab" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center" id="pills-tab">
                        <Nav.Item>
                            <Nav.Link eventKey="first">Projects </Nav.Link>
                        </Nav.Item>
                    </Nav>
                
                    
                    <Tab.Content>
                        <Tab.Pane eventKey="first">
                            <Row>
                                {
                                    projects.map((project, index) => {
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
                </Col>
            </Row>
        </Container>
        <img className="background-image-right" src={colorSharp2} />
    </section>
  )
}

export default Project