import React from 'react'
import projects from '../projects.json'
import { Link, animateScroll as scroll } from 'react-scroll'

const Home = () => {
  return (
    <>
      <div id='about' class='home container'>
        <Hero />
        <About />
      </div>
      <div id='work' class='work container'>
        <Projects />
      </div>
      <div id='contact' class='contact container'>
        <Contact/>
      </div>
      <div class="footer container">
        <Footer/>
      </div>
    </>
  )
}

function Hero () {
  return (
    <div class='hero container flex flex-col justify-end mt-[20vh] md:mt-[15vh]'>
      <div class='hero-title inline-block m-0 whitespace-nowrap text-7xl font-monaco md:text-3xl'>
        Krizia Bianca<span>&nbsp;</span>
      </div>
      <div class='hero-description my-20 text-xl leading-10 font-extralight md:text-lg md:max-w-[100%] md:mt-12 md:mb-12 md:mx-0 md:leading-[30px]'>
        I'm a freelance Wordpress and Web developer. My passion is about
        creating simple and functional websites.
        <br />
        Check out my{' '}
        <Link to='work' spy={true} smooth={true} duration={500} class='custom-lnk font-bold'>
          works
        </Link>{' '}
        below.
      </div>
    </div>
  )
}

function getAbout () {
  const about = [
    {
      input: 'Krizia.currentLocation',
      return: '"Quezon City, PH"'
    },
    {
      input: 'Krizia.contactInfo',
      return: [
        '["<a href="mailto:krizia.dev@gmail.com">krizia.dev@gmail.com</a>"',
        ' "<a rel="nopenoer" href="https://linkedin.com/in/kbafadriquela/">LinkedIn</a>"',
        ' "<a rel="noopener" href="https://github.com/kbafadriquela">github</a>"]'
      ]
    },
    {
      input: 'Krizia.resume',
      return:
        '<a rel="noopener" href="https://drive.google.com/file/d/1jXh35q8os3z8ok9KvwxQ8mAy3ozEHovV/view?usp=sharing" target="_blank">kriziabianca.pdf</a>'
    },
    {
      input: 'Krizia.interests',
      return: '["design", "cooking", "netflix", "cats"]'
    },
    {
      input: 'Krizia.education',
      return: '"B.S. in Computer Science - New Era University, Quezon City"'
    },
    {
      input: 'Krizia.skills',
      return: '["HTML5", "CSS", "ReactJS", "Wordpress", "PHP", "git"]'
    }
  ]

  return about
}

function About () {
  const about = getAbout()
  const aboutDetails = about.map((about, index) => {
    return (
      <div class='statement mb-6 mx-9' key={index}>
        <div class='input-statement text-fadedWhite'>{about.input}</div>
        <div
          class='return-statement text-fadedYellow'
          dangerouslySetInnerHTML={{ __html: about.return }}
        ></div>
      </div>
    )
  })
  return (
    <div id='about' class='about container'>
      <div class='terminal'>
        <div class='terminal-header flex justify-start items-center rounded-t-[10px] h-7'>
          <div class='header-button w-3.5 h-3.5 red'></div>
          <div class='header-button w-3.5 h-3.5 yellow'></div>
          <div class='header-button w-3.5 h-3.5 green'></div>
        </div>
        <div class='terminal-window font-monaco'>
          {aboutDetails}
          <div class='statement mb-6 mx-9'>
            <div class='input-statement text-fadedWhite'>
              <span>&nbsp;</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function Projects () {
  const project = projects;
  const projectDetails = project.map((project, index) => {
    return (
      <div class='project card relative flex flex-row justify-end mb-14 rounded overflow-hidden'>
        <img
          class='absolute top-0 left-0 w-[90%] lg:hidden'
          src={project.image}
          alt={project.title}
        />
        <div class='project-background absolute top-[-1px] right-[1px] h-[110%] w-[85%] lg:hidden'></div>
        <div class='project-content p-14 w-[65%] z-[2] lg:w-[100%] lg:p-8 lg:box-border'>
          <h3 class='text-blue-title text-3xl mt-0 mb-9 font-semibold lg:font-normal lg:text-3xl'>{project.title}</h3>
          <p class="mb-[30px] leading-[27px]">{project.description}</p>
          <div class='project-skills flex flex-wrap'>
            {project.skills.map((item, index) => {
              return <span key={index} class="skill mr-2.5 mb-2.5 p-2 text-sm">{item}</span>
            })
            }
          </div>
          <div class="project-links flex justify-start items-center flex-wrap">
            <a href={project.url} rel="noopener" target='_blank' class="link mr-5  mt-5 whitespace-nowrap inline-block px-3 py-0 decoration-0 font-[100] font-camphor text-sm box-border bg-purple text-fadedWhite">
              Live Demo <svg aria-hidden="true" data-prefix="fas" data-icon="external-link-alt" class="svg-inline--fa fa-external-link-alt fa-w-18 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-reactid="68">
              <path fill="currentColor" d="M576 24v127.984c0 21.461-25.96 31.98-40.971 16.971l-35.707-35.709-243.523 243.523c-9.373 9.373-24.568 9.373-33.941 0l-22.627-22.627c-9.373-9.373-9.373-24.569 0-33.941L442.756 76.676l-35.703-35.705C391.982 25.9 402.656 0 424.024 0H552c13.255 0 24 10.745 24 24zM407.029 270.794l-16 16A23.999 23.999 0 0 0 384 303.765V448H64V128h264a24.003 24.003 0 0 0 16.97-7.029l16-16C376.089 89.851 365.381 64 344 64H48C21.49 64 0 85.49 0 112v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V287.764c0-21.382-25.852-32.09-40.971-16.97z" data-reactid="69"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    )
  })
  return (
    <>
      <h2
        id='works'
        class='section-title font-camphor font-bold text-blue-title text-center text-2xl pt-[50px] mt-[50px] mb-[80px] md:mb-10'
      >
        Works
      </h2>
      <div class='projects-container mx-auto'>{projectDetails}</div>
    </>
  )
}

function Contact() {
  const contact = [
    {
      "text": "krizia.dev@gmail.com",
      "link": "mailto:krizia.dev@gmail.com"
    },
    {
      "text": "LinkedIn",
      "link": "https://www.linkedin.com/in/kbafadriquela"
    },
    {
      "text": "Github",
      "link": "https://github.com/kbafadriquela"
    }
  ]
  const contactDetails = contact.map((contact, index) => {
    return (
      <span key={index} class="md:my-5">
        <a class='relative decoration-0 text-col' rel="noopener" target="_blank" href={contact.link}>{contact.text}</a>
      </span>
    )
  });

  return (
    <>
    <h2 id='contact' class='section-title font-camphor font-bold text-blue-title text-center text-2xl pt-[50px] mt-[50px] mb-[80px]'
    > Let's talk!
    </h2>
    <div class="contact-links flex text-lg mt-[150px] pb-[200px] justify-center text-center md:flex-col md:mt-20 md:pb-20">
      {contactDetails}
    </div>
    </>
  )
}

function Footer() {
  return (
    <div class="footer mx-auto text-sm font-camphor text-center pb-12 text-blue-title">
      <span>Made by Krizia Bianca &copy; {new Date().getFullYear()}</span>
    </div>
  )
}

export default Home
