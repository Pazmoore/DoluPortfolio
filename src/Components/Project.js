import { Col, Container, Row, Tab, Nav } from "react-bootstrap";
import ProjectCard from "../Components/ProjectCard";
import colorSharp2 from "../Assets/img/color-sharp2.png";
import projImg1 from "../Assets/img/project-img1.png";
import projImg3 from "../Assets/img/project-img3.png";
import projImg4 from "../Assets/img/project-img4.png";
import projImg5 from "../Assets/img/project-img5.png";
import projImg6 from "../Assets/img/project-img6 .png";
import projImg7 from "../Assets/img/project-img7.png";
import projImg8 from "../Assets/img/project-img8.png";
import projImg9 from "../Assets/img/project-img9.png";
import projImg10 from "../Assets/img/project-img10.png";  
import projImg11 from "../Assets/img/project-img11.png";  


const Project = () => {

    const projects = [
        {
            title: "Anime Website",
            description: "HTML & CSS",
            link: "https://github.com/Pazmoore/anime.git",
            link1: "https://anime-five-beta.vercel.app/",
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
            link1: "https://react-sign-up-form-tau.vercel.app/",
            imgUrl: projImg7,
        },
        // {
        //     title: "Online Classes Website",
        //     description: "React.Js, CSS & React Router DOM",
        //     link: "https://github.com/Pazmoore/School-Website.git",
        //     link1: "https://school-website-five-tan.vercel.app/",
        //     imgUrl: projImg6,
        // },
        // {
        //     title: "A Fan-page Website",
        //     description: "React.Js, CSS & React Router DOM",
        //     link: "https://github.com/Pazmoore/K-Drama.git",
        //     link1: "https://k-drama-tau.vercel.app/",
        //     imgUrl: projImg8,
        // },
        {
            title: "Qr-code maker Website",
            description: "HTML, CSS & JavaScript",
            link: "https://github.com/Pazmoore/qr-code.git",
            link1: "https://qr-code-pink-seven.vercel.app/",
            imgUrl: projImg9,
        },
        {
            title: "Valentine's Website",
            description: "React.Js, CSS & Bootstrap",
            link: "https://github.com/Pazmoore/RizzlyBear.git ",
            link1: "https://rizzybear.vercel.app/",
            imgUrl: projImg10,
        },
        {
            title: "Animal Website",
            description: "HTML & Bootstrap",
            link: "https://github.com/Pazmoore/animals.git",
            link1: "https://animals-flax.vercel.app/",
            imgUrl: projImg11,
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
