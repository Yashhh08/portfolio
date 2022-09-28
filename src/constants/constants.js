import React from 'react';
import youtube from '../Assets/youtube.gif'
import Indiamart from '../Assets/Indiamart.gif'
import Sephora from '../Assets/Sephora.gif'
import { SiHtml5 } from "react-icons/si";
import { DiCss3 } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
export const holeThing = [
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
    },
    {
      icons : [
        <SiHtml5 />,
        <DiCss3 />,
        <IoLogoJavascript />
      ],
      gifSource : youtube,
      headers : "YouTube Clone",
      liveCode : "https://storied-biscuit-02cfea.netlify.app",
      sourceCode : "https://github.com/Yashhh08/ES6-1-YouTube-",
      main : "Youtube clone is my individual project. I created this when I was learning REST API.",
      body : "",
    },
  ]