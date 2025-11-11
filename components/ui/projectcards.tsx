import { HoverEffect } from "@/components/ui/hover-effect"

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl  mx-auto px-8    ">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
   {
    title: "Customer-Relationship-Management-System",
    description:
      "This CRM application provides a streamlined platform to manage customer interactions, leads, contacts and sales pipelines.",
    link: "https://v0-crm-system-build.vercel.app/",
    github: "https://github.com/krishna7054/Customer-Relationship-Management-System",
    imglink:"p6.png",
  },
  {
    title: "Blog Likho",
    description:
      "This project is a blogging platform that allows users to read and publish blog posts. It features an AI-powered summary generation for blog content using Gemini AI, enhancing user experience by providing quick insights into the articles.",
    link: "https://blog-likho.vercel.app/",
    github: "https://github.com/krishna7054/Blog-Likho",
    imglink:"p1.jpeg",
  },
  {
    title: "Startup-Board",
    description:
      "Start-Up Board is a web application designed to connect startup founders with potential investors. Founders can create and manage their startup profiles, while investors can browse and interact with these profiles. The application is built using Node.js, MongoDB for the backend, and React with Tailwind CSS for the frontend.",
    link: "https://startup-board-v02.netlify.app/",
    github: "https://github.com/krishna7054/Startup-Board",
    imglink:"p2.jpeg",
  },
  {
    title: "Skill-App",
    description:
      "Skill App is a web application that allows users to register, log in, and manage their skills. It provides functionality for adding and removing skills and displays users and their respective skills.",
    link: "https://prismatic-brigadeiros-14ae59.netlify.app/",
    github: "https://github.com/krishna7054/Skill-App",
    imglink:"p3.jpeg",
  },
  {
    title: "Movie Library App",
    description:
      "A movie library web application built with Node.js, Express, React, and Tailwind CSS. This application allows users to sign up, sign in, search for movies using the OMDB API, and create and manage movie lists that can be either public or private.",
    link: "https://coruscating-churros-aea073.netlify.app/",
    github: "https://github.com/krishna7054/Movie-Library",
    imglink:"p4.jpeg",
  },
  {
    title: "Personal Bookshelf",
    description:
      "Personal Bookshelf is a React application that allows users to search for books using the Open Library API and maintain a personal bookshelf in the browser using localStorage.",
    link: "https://incredible-tartufo-dc95f5.netlify.app/",
    github: "https://github.com/krishna7054/Personal-Bookshelf",
    imglink:"p5.jpeg",
  },
];
