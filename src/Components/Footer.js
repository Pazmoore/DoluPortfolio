import { Col, Container, Row } from "react-bootstrap"
import navIcon1 from '../Assets/img/nav-icon1.svg'
import navIcon2 from '../Assets/img/nav-icon2.svg';
import navIcon3 from '../Assets/img/nav-icon3.svg';



const Footer = () => {
  return (
    <footer className="footer">
        <Container>
            <Row className="align-items-center">
                <Col  className="text-center text-sm">
                    <div className="social-icon">
                        <a href="http://linkedin.com/in/doluwamu-omoteso-8b9104246" target='#' ><img src={navIcon1} /></a>
                        <a href="https://x.com/la_dame_paz?s=21" target='#' ><img src={navIcon2} /></a>
                        <a href="https://www.instagram.com/la_dame_paz?igsh=MTE5c2JuZTJuMjNvZA%3D%3D&utm_source=qr" target='#' ><img src={navIcon3} /></a>
                    </div>
                    <p>CopyRight &copy;2022. All Right Reserved Doluwamu.</p>
                </Col>
            </Row>
        </Container>
    </footer>
  )
}

export default Footer