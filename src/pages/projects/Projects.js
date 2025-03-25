import React from "react";
import "./Projects.css";
import pawanProjectImg from "../../assets/pawanProjectImg.png";
import buildYourBuzz from "../../assets/buildYourBuzz.png";
import farmer2buyer from "../../assets/farme2buyer.png";
import cloths4u from "../../assets/cloths4u.png";
import AiWebsiteBuilder from "../../assets/AiWebsiteBuilder.png";
const Project = () => {
  const projects = [
    {
      title: "Pawan Computer Center",
      description:
        "Implemented a secure authentication system and admin dashboard for managing 500+ student records, leveraging MongoDB and Stripe for efficient operations and payment processing.",
      technologies: [
        "react.js",
        "express.js",
        "node.js",
        "swiper.js",
        "mongoDB",
        "mongoose",
        "css",
        "javascript",
        "figma",
      ],
      image: pawanProjectImg,
      link:
        "https://www.veed.io/view/b0752902-c2cf-42be-aa37-544f2593785b?panel=share",
      type: "E-learning website",
    },
    {
      title: "Build Your Buzz",
      description:
        "Developed a digital marketing platform using the MERN stack and React Router DOM for smooth navigation, featuring secure user authentication and integrated Nodemailer for effective communication.",
      technologies: ["react.js", "tailwind.css", "node.js"],
      image: buildYourBuzz,
      link: "https://build-your-buzz.vercel.app/",
      type: "Landing Page",
    },
    {
      title: "Farmer2Buyer",
      description:
        "Developed a responsive interface for agricultural products, enhancing accessibility across devices while improving user experience through effective DOM navigation during presentations at SIH India.",
      technologies: ["react.js", "swiper.js", "css", "javascript", "figma"],
      image: farmer2buyer,
      link: "https://farmers-2-sellers.netlify.app/",
      type: "Hackathon Project",
    },
    {
      title: "Clothes4U",
      description:
        "Developed a fully responsive eCommerce website using React.js, enabling users to browse and purchase clothing products effortlessly. Integrated product filtering and search functionalities, improving customer navigation and the overall shopping experience.",
      technologies: ["react.js", "tailwind.css", "node.js"],
      image: cloths4u,
      link: "https://cloths4u.netlify.app/",
      type: "E-commerce",
    },

    {
      title: "Ai Website Builder",
      description:
        "Developed a fully responsive eCommerce website using React.js, which can create a new website from the users prompts only.",
      technologies: ["react.js", "tailwind.css", "node.js"],
      image: AiWebsiteBuilder,
      link: "",
      type: "E-commerce",
    },
  ];

  return (
    <>
      <div className="project-container">
        <div className="project-title">
          <h1>Latest Works</h1>
        </div>
      </div>
      <section className="project-section">
        <div className="project-container-inner">
          <div className="vertical-line"></div>

          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="circle-dot"></div>
              <div className="horizontal-line"></div>

              <div className="project-image-container">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={project.image} alt={project.title} />
                </a>
              </div>

              <div className="project-details">
                <h3>{project.title}</h3>
                <span>{`(${project.type})`}</span>
                <p>{project.description}</p>
                <ul className="project-tech-list">
                  {project.technologies.map((tech, i) => (
                    <li key={i} className="project-tech-item">
                      #{tech}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Project;
