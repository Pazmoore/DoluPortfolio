import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../Assets/img/logo.svg';
import navIcon1 from '../Assets/img/nav-icon1.svg'
import navIcon2 from '../Assets/img/nav-icon2.svg';
import navIcon3 from '../Assets/img/nav-icon3.svg';
import navIcon4 from '../Assets/img/nav-icon4.svg';

const NavBar = () => {

    const [activeLink, setActiveLink] = useState('home');
    const [scolled, seScrolled] = useState(false);


    useEffect (()=> {
        const onScroll = () => {
            if (window.scrollY> 50){
                seScrolled(true);
            }else{
                seScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
        
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }


  return (
    <Navbar expand="lg" className={scolled ? "scrolled": ""}>
        <Container className='container'>
            <Navbar.Brand href="#home">
                <img src={logo} alt='Logo' />
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="basic-navbar-nav"> 
                <span className="navbar-toogler-icon" ></span>
            </Navbar.Toggle>

            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link': 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link': 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link': 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
                
                </Nav>

                <span className='navbar-text'>
                    <div className='social-icon' >
                        <a href='http://linkedin.com/in/doluwamu-omoteso-8b9104246'target='#'> <img src={navIcon1} alt='Logo' /></a>
                        <a href='https://x.com/la_dame_paz?s=21'target='#'> <img src={navIcon2} alt='Logo' /></a>
                        <a href='https://www.instagram.com/la_dame_paz?igsh=MTE5c2JuZTJuMjNvZA%3D%3D&utm_source=qr' target='#'> <img src={navIcon3} alt='Logo' /></a>
                        <a href='https://wa.link/2de248' target='#'> <img src={navIcon4} alt='Logo' /></a>
                    </div>
                    <button className='vvd' onClick={() => console.log('connect')}> <span className='vvd-span'>Let's Connect</span></button>
                </span>
            </Navbar.Collapse>
        </Container>
  </Navbar>
  )
}

export default NavBar