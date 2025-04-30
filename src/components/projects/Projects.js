import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree, projectFour, projectFive, projectSix } from "../../assets/index";
import ProjectsCard from './ProjectsCard';
import { BsGithub } from "react-icons/bs";
import { FaGlobe } from "react-icons/fa";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Aflax Restaurant"
          des=" Aflax Restaurant offers a unique dining experience with fresh, locally sourced dishes 
          and exceptional service in a welcoming atmosphere.!"
          src={projectOne}
          github={<a href="https://github.com/aldhussein/Aflax-Restaurant/" target='blank'><BsGithub /></a>}
          link={<a href="https://next-js2-topaz.vercel.app/" target='blank'><FaGlobe /></a>}

        />
        <ProjectsCard
          title="FullStack Todo Web App"
          des="Full-stack TODO app using Next.js 15 with App Router, CRUD, auth, DB storage, Tailwind UI, and server actions for a seamless task management."
          src={projectTwo}
          github={<a href="https://github.com/aldhussein/shopify" target='blank'><BsGithub /></a>}
          link={<a href="https://sneekers-shop.netlify.app/" target='blank'><FaGlobe /></a>}
        />
        <ProjectsCard
          title="book Store Website"
          des=" Book Store offers a curated selection of books for every reader, with a cozy atmosphere and personalized
           service to ignite your love for reading."
          src={projectThree}
          github={<a href="https://github.com/aldhussein/Book-Store" target='blank'><BsGithub /></a>}
          link={<a href="https://ald-book-store.netlify.app/" target='blank'><FaGlobe /></a>}
        />
        <ProjectsCard
          title="Digital Agency"
          des=" My Digital Agency combines creative design, innovative strategies, and cutting-edge technology to help
           businesses thrive in the digital world"
          src={projectFour}
          github={<a href="https://github.com/aldhussein/Digital-agency" target='blank'><BsGithub /></a>}
          link={<a href="https://ald-digital-agency.netlify.app/" target='blank'><FaGlobe /></a>}
        />
        <ProjectsCard
          title="E-commerce Website"
          des=" My E-Commerce Store  offers a seamless shopping experience with a wide range of high-quality products, fast shipping,
           and unbeatable customer service."
          src={projectSix}
          github={<a href="https://github.com/aldhussein/shopify-web" target='blank'><BsGithub /></a>}
          link={<a href="https://ald-shopping-web.netlify.app/" target='blank'><FaGlobe /></a>}
        />
        <ProjectsCard
          title="E-Learning"
          des=" My E-Learning Platform  provides engaging, flexible online courses designed to help you learn new skills 
          and advance your career at your own pace."
          src={projectFive}
          github={<a href="https://github.com/aldhussein/E-Learning" target='blank'><BsGithub /></a>}
          link={<a href="https://e-learning-online-app.netlify.app/" target='blank'><FaGlobe /></a>}
        />
      </div>
    </section>
  );
}

export default Projects
