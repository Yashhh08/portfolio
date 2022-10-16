import React from 'react';
import youtube from '../Assets/youtube.gif'
import Indiamart from '../Assets/Indiamart.gif'
import Sephora from '../Assets/Sephora.gif'
import Swagger from '../Assets/Swagger.jpeg'
import { SiHtml5 } from "react-icons/si";
import { DiCss3 } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
import { SiJava } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiSpringboot } from "react-icons/si";
import { SiSwagger } from "react-icons/si";


export const holeThing = [
  {
    icons : [
      <SiJava  />,
      <SiMysql />,
      <SiSpringboot />,
      <SiSwagger />
    ],
    gifSource : Swagger,
    headers : "Covid-19 Web Application Clone",
    liveCode : "https://github.com/Dhruva8878/Covid_19_webApp", 
    sourceCode : "https://github.com/Dhruva8878/Covid_19_webApp",
    main : "A RESTful API web-service for a Covid-19 Application. This API performs all the fundamental CRUD operations of Covid-19 Application platform with user validation at every step.",
    body : "Implemented User Module, Login and Signup functionality. A collaborative project built by a team of five and executed in five days.",
  },
    {
      icons : [<SiHtml5 />,<DiCss3 />,<IoLogoJavascript />],
      gifSource : Sephora,
      headers : "Sephora Clone",
      liveCode : "https://magenta-melba-85b7ee.netlify.app/homepage.html",
      sourceCode : "https://github.com/Yashhh08/SEPHORA-Clone",
      main : "Sephora is an E-Commerce website with a variety of products related to beauty and skincare. Sephora is a French multinational retailer of personal care and beauty products.",
      body : "Led a team of six batchmates. A collaborative project built by a team of five and executed in five days.",
    },
    {
      icons : [
        <SiHtml5 />,
        <DiCss3 />,
        <IoLogoJavascript />
      ],
      gifSource : Indiamart,
      headers : "Indiamart Clone",
      liveCode : "https://realindiamart.netlify.app/",
      sourceCode : "https://github.com/raus376/IndiaMart_Website",
      main : " IndiaMart is an E-Commerce website that connects buyers with suppliers. IndiaMART InterMESH Ltd is an Indian e-commerce company that provides B2B and customer to customer sales services via its web portal. ",
      body : "Worked on a Homepage. A collaborative project built by a team of five and executed in five days.",
    }
  ]