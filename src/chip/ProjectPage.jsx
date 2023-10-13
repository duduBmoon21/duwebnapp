import React, { useState } from "react";

import styled from "styled-components";

import {Card, CardHeader, CardBody, CardFooter, Image, Button} from "@nextui-org/react";

import img1 from "../assets/voting.jpg"
import img2 from "../assets/lf.jpg"
import img3 from "../assets/LMS.jpg"
import img4 from "../assets/voting.jpg"
import img5 from "../assets/lf.jpg"


const ProjectPage = () => {
  
  const projectData = [
    {
      id:1,
   img:img1,
      // D:\DOWNLOADS\du-web-main\du-web-main\src\assets
      title: "Project 1",
      description: "This is 5the card description section. You can add more details about the product here",
   
    },
    {
      id:2,
      img:img2,
      title: "Project 2",
      description: "This is 5the card description section. You can add more details about the product here",
    },
    {
      id:3,
      img:img3,
      title: "Project 3",
      description: "This is 5the card description section. You can add more details about the product here",
  
    },
    {
      id:4,
      img:img4,
      title: "Project 4",
      description: "This is 5the card description section. You can add more details about the product here",
    
     
    }
    ,
    {
      id:5,
      img:img5,
      title: "Project 4",
      description: "join our community and receive the latest updates on Apps and Games join our community and receive the latest updates on Apps and Games",
    
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

                <Card className="py-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">{projectData.description}.</p>
        <small className="text-default-500">{projectData.title} </small>
        <h4 className="font-bold text-large">{projectData.title} </h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src= {projectData.img}
          width={270}
        />
      </CardBody>
    </Card>

   {/* <Card >
      <CardHeader >
        <h4 className="text-black font-medium text-2xl">{projectData.title}</h4>
        <p className="text-black text-tiny">{projectData.description}.</p>
      </CardHeader>
      <Image
        removeWrapper
        alt="Card example background"
        
        // src="/images/card-example-6.jpeg"
        src= {projectData.img}
      />
     
    </Card> */}



                </div>
              </POPUP>
             
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


