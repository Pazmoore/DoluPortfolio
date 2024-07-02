import { useEffect, useState } from "react";
import { Col, Container, Row} from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../Assets/img/header-img.svg";


const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const[isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Front-End Web Developer", "Web Designer"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 -Math.random() * 100)
    const period = 2000;
    

    useEffect(() => {
        let ticker = setInterval(()=> {
            tick();
        },delta)

        return () => {clearInterval(ticker)};
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if(isDeleting) {
            setDelta(prevDelta => prevDelta /2)
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        }else if (isDeleting && updatedText ==='') {
            setIsDeleting(false);
            setLoopNum(loopNum +1);
            setDelta(500);
        }
    }


  return (
    <section className="banner" id="home">
        <Container>
            <Row className="align-items-center">
                <Col xs={12} md={6} xl={7}>
                <span className="tagline">Welcome to my Portfolio</span>
                <h1>{`Hi I'm Doluwamu OMOTESO`} <span className="wrap">{text}</span></h1>
                <p> I am Doluwamu, a Front-End Web Developper. I have the knowledge of HTML & CSS, Bootstrap, React.js and Next.js.
                    <br/>
                    <br/>
                    I love bringing to life and expressing my creativity with insightful solutions. 
                    I have the ability to create effective front-end user interfaces in line with contemporary best practices. 
                    <br/>
                    <br/>
                    I look forward to working with you and I believe that i will bring the needed harmony to your team. 
                </p>
                <button onClick={()=> console.log('connect')}>Let's Connect <ArrowRightCircle size={25}></ArrowRightCircle> </button>
                </Col>   

                <Col xs={12} md={6} xl={5}>
                    <img src={headerImg} alt="Header Img"/>
                </Col>           
            </Row>
        </Container>
    </section>
  )
}
 
export default Banner
