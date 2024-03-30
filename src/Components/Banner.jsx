
import React,{ useState,useEffect } from 'react'
import { Container ,Row,Col} from 'react-bootstrap'
import {ArrowRightCircle} from 'react-bootstrap-icons'
import headerImg from "../assets/img/header-img.svg"

export default function Banner() {
    const [looNum,setLoopNum]=useState(0);
    const [isDeleting,setIsDeleting]=useState(false);
    const toRotate=["Web Devloper","Web designer","UI/UX Designer"];
    const[text,setText]=useState('');
    const period=2000;
    
    useEffect(()=>{
        
    })
  return (
    <Container className='banner' id='home'>
      <Row className="align-items-center">
        <Col xs={12}md={6} xl={7}>
<span className='tagline'>Welcome to my portfolio</span>
<h1>
    {`Hi I'm Aniket` }<span className='wrap'>Web Devloper</span>
    
</h1>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis ducimus eius sequi recusandae ullam illo, debitis magni, maxime obcaecati soluta reprehenderit reiciendis explicabo iste rem fuga asperiores veritatis voluptates totam. Dicta pariatur quibusdam cupiditate rem aut adipisci illum. Facere modi quibusdam voluptates. Dignissimos quaerat quae explicabo reiciendis eius animi commodi.</p>
<button onClick={()=>console.log('connect')}>Let's Connect <ArrowRightCircle size={25}/></button>
        </Col>
        <Col xs={12}md={6} xl={5}>
<img src={headerImg} alt='header image'></img>
        </Col>
      </Row>
    </Container>
  )
}
