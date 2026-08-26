import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree, projectFour, projectFive, projectSix, blogImage } from "../../assets/index";
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
          title="FullStack E-commerce ALD TECHs"
          des="ALD TECHs offers a seamless shopping experience with top laptops, desktops, gaming PCs, and PC parts. Find powerful, modern, and reliable tech built for gamers, professionals, and enthusiasts."
          src={projectTwo}
          github={<a href="https://github.com/aldhussein/E-commerce" target='_blank' rel="noreferrer"><BsGithub /></a>}
          link={<a href="https://github.com/aldhussein/Ecommerce2" target='_blank' rel="noreferrer"><FaGlobe /></a>}
        />

        <ProjectsCard
          title="Elearning Website"
          des="Full-stack course marketplace with instructor dashboards, Stripe payments, and progress tracking — built end-to-end with Next.js, TypeScript, and PostgreSQL."
          src={projectFour}
          github={<a href="https://github.com/aldhussein/Elearning" target='_blank' rel="noreferrer"><BsGithub /></a>}
          link={<a href="https://elearning-gilt-two.vercel.app/" target='_blank' rel="noreferrer"><FaGlobe /></a>}
        />
            
          <ProjectsCard
          title="FullStack Public Blog"
          des="A modern, responsive blog platform built with Next.js, TypeScript, Tailwind CSS, Prisma, and Firebase Auth. Users can create, edit, like, comment on posts, manage profiles, and enjoy dark/light mode with seamless pagination."
          src={blogImage}
          github={<a href="https://github.com/aldhussein/Public_Blog" target='_blank' rel="noreferrer"><BsGithub /></a>}
          link={<a href="https://public-blog-gamma.vercel.app/" target='_blank' rel="noreferrer"><FaGlobe /></a>}
        />
          <ProjectsCard
          title="Fullstack Todo-List"
          des="A full-stack To-Do app with user authentication, where each user can securely manage their own tasks with full CRUD functionality."
          src={projectThree}
          github={<a href="https://github.com/aldhussein/Todo/" target='_blank' rel="noreferrer"><BsGithub /></a>}
          link={<a href="https://todo-beta-eight-74.vercel.app/" target='_blank' rel="noreferrer"><FaGlobe /></a>}
        />
        <ProjectsCard
          title="Aflax Restaurant"
          des=" Aflax Restaurant offers a unique dining experience with fresh, locally sourced dishes 
          and exceptional service in a welcoming atmosphere.!"
          src={projectOne}
          github={<a href="https://github.com/aldhussein/Aflax-Restaurant/" target='_blank' rel="noreferrer"><BsGithub /></a>}
          link={<a href="https://aflaxretaurant.netlify.app/" target='_blank' rel="noreferrer"><FaGlobe /></a>}

        />
        
     
   
        <ProjectsCard
          title="E-commerce Website"
          des=" My E-Commerce Store  offers a seamless shopping experience with a wide range of high-quality products, fast shipping,
           and unbeatable customer service."
          src={projectSix}
          github={<a href="https://github.com/aldhussein/shopify-web" target='_blank' rel="noreferrer"><BsGithub /></a>}
          link={<a href="https://ald-shopping-web.netlify.app/" target='_blank' rel="noreferrer"><FaGlobe /></a>}
        />
        <ProjectsCard
          title="E-Learning"
          des=" My E-Learning Platform  provides engaging, flexible online courses designed to help you learn new skills 
          and advance your career at your own pace."
          src={projectFive}
          github={<a href="https://github.com/aldhussein/E-Learning" target='_blank' rel="noreferrer"><BsGithub /></a>}
          link={<a href="https://e-learning-online-app.netlify.app/" target='_blank' rel="noreferrer"><FaGlobe /></a>}
        />
      </div>
    </section>
  );
}

export default Projects
