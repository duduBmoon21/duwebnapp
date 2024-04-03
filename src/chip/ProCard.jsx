import React, { useState } from "react";

import styled from "styled-components";
import { RxExternalLink } from "react-icons/rx";
import { AiOutlineGithub } from "react-icons/ai";
import { Link } from "react-router-dom";

import img1 from "../assets/ss3.png"
import img2 from "../assets/emp.jpg"
import img3 from "../assets/LMS.jpg"
import img4 from "../assets/duhp.jpg"
import img5 from "../assets/lf.jpg"


const ProjectPage = () => {
  
  const projectData = [
    {
      id:1,
   img:img1,
      // D:\DOWNLOADS\du-web-main\du-web-main\src\assets
      title: "To-App",
      link:"https://mytodo-final.vercel.app",
      description: "This is simple To-do allows users to create, manage, and track their tasks or to-do items. It helps users stay organized, prioritize their tasks, and keep track of their progress.the card description section. You can add more details about the product here",
   
    },
    // {
    //   id:2,
    //   img:img2, href:mailto:adugnatefera12@gmail.com
    
    //   title: "Employee Management System",
    //   description: "This is 5the card description section. You can add more details about the product here",
    // },
    {
      id:3,
      img:img3,
    link:"http://localhost/Hospital-PHP/index.php",
      title: "Project Management system",
      description: "This Project is designed to simplify project management processes, improve collaboration, and enhance project delivery within organizations. By utilizing its features, users can effectively plan, track, and manage projects, leading to increased productivity and successful project outcomes.",
  
    },
    {
      id:4,
      img:img4,
      title: "Hosipital",
          link:"email me",
      description: "This project helps you to keep track of medical reports. Also, it displays all the available employees and patients. In addition, it allows adding up inventories, and pharmacy records too. Evidently, this project contains an admin panel with an employee/doctor panel.",
    
     
    }
    ,
    {
      id:5,
      img:img5,
          link:"email me",
      title: "Lost And Found",
      description: "This project help you to find any lost items or object in easily. in an organization or community. It simplifies the process of reporting, searching, matching, claiming, and returning lost items.",
    
    }
   
  ];
  const reversedData = [...projectData].reverse();
  return (
    
    <>
    {reversedData.map((projectData) => {
           return (

            <div
            data-aos="zoom-in"
            key={projectData.id}
            className="flex flex-col justify-center items-center gap-4"
          >
            <POPUP className="img-content relative">
              <div className="h-[280px] w-[380px] hover:scale-125 transition duration-500 cursor-pointer shadow-xl rounded-md overflow-hidden sm:h-[260px] sm:w-[92%] sm:bg-cover mx-auto ">
                <img
                  src={projectData.img}
                  alt={projectData.title}
                  className=" object-fit w-full h-full hover:scale-125 transition duration-500 cursor-pointer"
                />
              </div>

              <div
                className={` popup w-full  h-[280px] shadow-xl rounded-md overflow-hidden sm:h-[260px] sm:w-[92%] p-4`}
              >
                <p className=" text-gray-900 text-base leading-[1.4] text-justify w-[90%]">
                {projectData.description}
                </p>
                <div className=" flex items-center justify-center gap-4">
               {/* <p className=" text-black">{projectData.description}</p> */}
                
                  <br className="w-[2px] bg-white" />
                  <Link
                    to={projectData.link}
                    target="_blank"
                    className="  mt-3 rounded-md shadow-md p-1 px-2 flex gap-2 items-center justify-center font-medium"
                  >
                    <RxExternalLink className=" text-black bg-white rounded-full border  w-[35px] h-[35px] p-2" />
                    <p className=" text-black">Demo</p>
                  </Link>
                </div>
              </div>
            </POPUP>
            <p className="text-gray-800 text-xl font-medium sm:text-lg">
            {projectData.title}
            </p>
          </div>
          );
       

      })}
         
    </>

    
  );
};

export default ProjectPage;



const POPUP = styled.div`
  position: relative;
  img {
    &:hover {
      transform: scaleX(2);
    }
  }
  .popup {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: 0;
    margin: auto;
    transition: 0.5s ease;
    background: rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(5px);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  .icon {
    color: #fff !important;
  }
  &:hover .popup {
    opacity: 1;
    color: #fff;
  }
`;


