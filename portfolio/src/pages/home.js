import React from 'react'
import '../styles/homestyles.css';
const HOME = () => {
  return (
    <div className="app">
      <header className='navbar'>
          <a href="/" class="logo"> VIJAYAKANTH</a>
        <nav>
          <a href="/" class="active">Home</a>
          <a href="/resume">Resume</a>
          <a href="#">Skills</a>
          <a href="#">Education</a>
          <a href="#">Experience</a>
          <a href="#">Contact</a>
        </nav>
      </header>
        <div><section class="home">
            <div class="home-img">
              <img src="IMG_20240811_193707.jpg" alt="img"/>
            </div>
            <div class="home-content">
            <h1>Hi, It's <span>Vijayakanth M</span></h1>
            <h3 class="typing-text">I'm a <span></span></h3>
              <p>An engineering student eager to apply technical skills and problem-solving strategies in real-world projects
              to gain valuable experience and contribute significantly to demanding and creative environments.</p>
            <div class="social-icons">
              <a href="https://www.linkedin.com/in/vijayakanth-m-7b7767312"><i class="fa-brands fa-linkedin"></i></a>
              <a href="https://github.com/vijayakanth06"><i class="fa-brands fa-github"></i></a>
              <a href="https://leetcode.com/u/Vijayakanth06/"><i class="fa-solid fa-code"></i></a>
              <a href="mailto:vikymahendiran123@gmail.com"><i class="fa-solid fa-envelope"></i></a>
            </div>
        <a href="vijayakanthM_resume.pdf" download="vijayakanthM_resume.pdf" class="btn">Download Resume</a>
        
    </div>
    </section>
    </div>
</div>
    
  )
}

export default HOME;