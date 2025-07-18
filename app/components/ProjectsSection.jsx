"use client";
import Link from "next/link";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
    {
        id: 1,
        title: "Nexus Chat",
        description: "Developed a real-time chatroom application using React, Node.js, Express, and Socket.IO. The app allows users to create or join chat rooms, exchange messages, and view live typing indicators. It uses WebSocket-based communication and integrates with MongoDB to store messages.",
        image: "/images/projects/img_nexuschat.png",
        name: ["All", "Web", "Mobile"],
        /*gitUrl: "https://vmihira.github.io/Hunger-Halters/",*/
        previewUrl: "https://kuvaka-frontend-nine.vercel.app/",
    },
    {
        id: 2,
        title: "PharmaGenie",
        description: "A web platform designed to streamline medicine sales and inventory management for pharmacies. Built using Flask (Python) with a user-friendly interface, it includes features like user and owner registration, a medicine sales form, and a map view using Leaflet.js for pharmacy locations. It focuses on intuitive experience with seamless transitions.",
        image: "/images/projects/img_pharmagenie.png",
        name: ["All", "Web"],
        /*gitUrl: "https://github.com/Vmihira/OptiBus",*/
        previewUrl: "https://pharmagenie.onrender.com/",
      },
    {
        id: 3,
        title: "OptiBus",
        description: "OptiBus is a place where students can locate their bus easily using maps. Any emergency alerts can be notified by the driver or students to the management. The transport management can even notify its drivers and students regarding any circulars. This website is a solution for several transport issues.",
        image: "/images/projects/img_optibus.png",
        name: ["All", "Web"],
        /*gitUrl: "https://github.com/Vmihira/OptiBus",*/
        previewUrl: "https://vmihira.github.io/OptiBus/",
    },
      {
        id: 4,
        title: "AI PR Summarizer",
        description: "Developed a project focused on tracking recent GitHub pull requests, providing AI-generated summaries for each request. Enabled efcient insights into PR content and status, streamlining review and decision-making processes. Implemented features to automate PR insights, reducing manual review time and improving workflow efficiency for team-based projects.",
        image: "/images/projects/img_PrSummarizer.png",
        name: ["All", "Web", "Mobile"],
        /*gitUrl: "https://github.com/Vmihira/OptiBus",*/
        previewUrl: "https://pr-summarizer.onrender.com/",
     },
    {
      id: 5,
      title: "Recipe Maker",
      description: "A dynamic web application built with Flask (Python) that allows users to create and customize recipes. It leverages generative AI to suggest personalized recipes based on user preferences. The interface features an image and text layout with responsive design, periodic quote updates, and a user-friendly experience.",
      image: "/images/projects/img_recipemaker.png",
      name: ["All", "Mobile"],
      /*gitUrl: "https://github.com/Vmihira/OptiBus",*/
      previewUrl: "https://cook-pfhm.onrender.com/",
  },
    {
        id: 6,
        title: "Hunger halters",
        description: "This is a website which acts as an interface between food donar with the recipients. This is a user interactive website built using HTML, CSS and JavaScript. The website provides a complete solution for food wastage.",
        image: "/images/projects/img_hunger.png",
        name: ["All", "Web"],
        /*gitUrl: "https://vmihira.github.io/Hunger-Halters/",*/
        previewUrl: "https://vmihira.github.io/Hunger-Halters/",
    },

  {
    id: 7,
    title: "My Portfolio",
    description: "This is my portfolio built using Next.js. I have used Tailwind CSS and it's components in my portfolio. This portfolio helps the users know about my skills, projects and my experience. I placed different sections in my portfolio and a few of them are, About me, projects and contact me",
    image: "/images/projects/img_portfolio.png",
    name: ["All", "Mobile"],
    /*gitUrl: "/",*/
    previewUrl: "/",
  },
];


const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };
  const filteredProjects = projectsData.filter((project) =>
    project.name.includes(tag)
  );
  const cardVariants = {
    initial: { y: 50, opacity:0 },
    animate: { y: 0, opacity:1 },
  };

  return (
    <section id="projects">
       <h2 className="text-center text-4xl font-bold text-[#4F6F52] mt-4 mb-5">
        My Projects
      </h2>
      <div className=" flex flex-row font-bold justify-center items-center gap-2 py-6">
        <ProjectTag onClick={handleTagChange} name="All" isSelected={tag === "All"} />
        <ProjectTag onClick={handleTagChange} name="Web" isSelected={tag === "Web"} />
        <ProjectTag onClick={handleTagChange} name="Mobile" isSelected={tag === "Mobile"} />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li 
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4}}
          >
          <ProjectCard 
            key={project.id}
            description={project.description} 
            imgUrl={project.image} 
            tags={project} 
           previewUrl={project.previewUrl}
         >
          </ProjectCard>
        </motion.li>
       ))}
     </ul>
     <br />
     <br />
     <br />
     <br />
    </section>
  );
};

export default ProjectsSection;
