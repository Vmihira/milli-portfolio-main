"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";  
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="grid grid-cols-3 gap-2 text-[#4F6F52] font-semibold">
  <li className="flex flex-col items-center text-center">
    HTML
    <progress className="progress progress-success w-40" value="97" max="100"></progress>
    95
  </li>
  <li className="flex flex-col items-center text-center">
    CSS
    <progress className="progress progress-success w-40" value="80" max="100"></progress>
    80
  </li>
  <li className="flex flex-col items-center text-center">
    JavaScript
    <progress className="progress progress-success w-40" value="80" max="100"></progress>
    80
  </li>
  <li className="flex flex-col items-center text-center">
    Python
    <progress className="progress progress-success w-40" value="100" max="100"></progress>
    100
  </li>
  <li className="flex flex-col items-center text-center">
    Data Structures
    <progress className="progress progress-success w-40" value="75" max="100"></progress>
    75
  </li>
  <li className="flex flex-col items-center text-center">
    C++
    <progress className="progress progress-success w-40" value="100" max="100"></progress>
    100
  </li>
  <li className="flex flex-col items-center text-center">
    Flask
    <progress className="progress progress-success w-40" value="80" max="100"></progress>
    80
  </li>
  <li className="flex flex-col items-center text-center">
    TailwindCSS
    <progress className="progress progress-success w-40" value="85" max="100"></progress>
    85
  </li>
  <li className="flex flex-col items-center text-center">
    React.js
    <progress className="progress progress-success w-40" value="75" max="100"></progress>
    75
  </li>
  <li className="flex flex-col items-center text-center">
    Next.js
    <progress className="progress progress-success w-40" value="85" max="100"></progress>
    85
  </li>
  <li className="flex flex-col items-center text-center">
    MongoDB
    <progress className="progress progress-success w-40" value="80" max="100"></progress>
    80
  </li>
  <li className="flex flex-col items-center text-center">
    Generative AI
    <progress className="progress progress-success w-40" value="80" max="100"></progress>
    80
  </li>
</ul>

    )
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc font-semibold pl-2 text-[#4F6F52]">
        <li>B-Tech </li>
        <li>Vignan Institute Of Information Technology __ 2022 - 2026</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc font-semibold pl-2 text-[#4F6F52]">
        <li>Artificial Intelligence From IBM</li>
        <li>Basics of Generative AI From LinkedIn Learning</li>
        <li>Web Development From IBM</li>
        <li>CCNA M1 and M2 From Cisco</li>
        <li>Python from Infosys Springboard</li>
        <li>Microsoft Azure Fundamentals From LinkedIn Learning</li>
        <li>Relational Database From IBM through edX</li>
        <li>MongoDB in Python</li>
      </ul>
    ),
  },
];


const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
        setTab(id);
    });
  };
  return (
    <section>
        <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
            <Image src="/images/about_image_3.png" width={500} height={500} />
            <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#4F6F52] via-green-200 to-[#4F6F52] mb-4">About Me</h2>
                <p className="text-base lg:text-lg text-[#4F6F52]">
                    I am a passionate web developer, intrested in creating responsive web applications. I work with HTML, CSS, JavaScript, TailwindCSS, React.js, Next.js, MongoDB. Being a web developer, I am always intrested in adding new skills in my skill set.
                </p>
                <div className="flex flex-row justify-start mt-5">
                  <TabButton 
                    selectTab={() => handleTabChange("skills")} 
                    active={tab === "skills"}
                  > 
                    {" "}
                    Skills{" "} 
                  </TabButton>
                  <TabButton 
                    selectTab={() => handleTabChange("education")} 
                    active={tab === "education"}
                  > 
                    {" "}
                    Education{" "} 
                  </TabButton>
                  <TabButton 
                    selectTab={() => handleTabChange("certifications")} 
                    active={tab === "certifications"}
                  > 
                    {" "}
                    Certifications{" "} 
                  </TabButton>
                </div>
                <div className="mt-8">{TAB_DATA.find((t) => t.id === tab).content}</div>
            </div>
        </div>
    </section>
  );
};

export default AboutSection;

