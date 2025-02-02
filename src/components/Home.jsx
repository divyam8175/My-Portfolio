import React, { useEffect, useRef } from 'react'
import pdf from '../pdf/resume.pdf'
import hero from './data/hero.json'
import Typed from 'typed.js'
// import { use } from 'react'

const Home = () => {
  const typedRef = useRef(null)
  useEffect(() => {
    const options={
      strings:[
        "Welcome to my portfolio",
        "My name is Divyam Verma",
        "I am a Full Stack Web Developer",
        "And a Competitive Programmer"],
      typeSpeed:50,
      backSpeed:50,
      loop:true
    }
    const typed = new Typed(typedRef.current,options)
    return ()=>{
      typed.destroy()
    }
  },[])
  return (
  <>
    <div className="container home" id="home">
        <div className="left"
        data-aos="fade-up-right"
        data-aos-duration="1000"
        >
            <h1 ref={typedRef}>
            </h1>
            <a href={pdf} download="resume.pdf" className='btn btn-outline-warning'>
                Download Resume
            </a>
        </div>
        <div className="right">
          <div className="image"
          data-aos="fade-up-left"
          data-aos-duration="1000"
          >
            <img src={`/assets/${hero.imgSrc}`} alt="hero" />
          </div>
        </div>
    </div>
    </>
  )
}

export default Home;
