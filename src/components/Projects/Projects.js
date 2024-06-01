import React from "react";
import { useEffect } from "react";
import { FaGithub } from "react-icons/fa";
import { Container, Row, Col, Button } from "react-bootstrap";
// import ProjectCard from "./ProjectCards";
import swiggyimg from '../../Assets/Projects/swiggy_poster.png';
import cooking_blog from '../../Assets/Projects/cooking_blogs.jpg';
import technews from '../../Assets/Projects/new_technews.avif';

import Particle from "../Particle";

const  Projects=()=>{
  
  return (
    <Container fluid className="project-section" id="project">
      {/* <Particle /> */}
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="web-text-color">Works </strong>
        </h1>
        <p style={{ color: "black" }} className="web-text-color">
          Here are a few projects I've worked on recently.
        </p>
        <section className="articles">
          <article>
            <div className="article-wrapper">
              <figure>
                <img src={swiggyimg} alt="" />
              </figure>
              <div className="article-body">
                <h2>Swiggy Clone</h2>
                <p className="project_txt_height">
This project is a Swiggy clone, crafted with ReactJS and Redux Toolkit for state management. CSS styling elevate the user interface, while the Swiggy API fuels real-time restaurant and menu data. Developers delve into React best practices, Redux Toolkit, API integration, and responsive design.
                 </p>
                <div class="button-wrapper"  >
                  <a href="https://github.com/rohanh007/Namaste-React/tree/main/Time_for_test" target="_blank" class="github-button" onMouseOver={(e) => { e.stopPropagation() }}>GitHub</a>
                  <a href="https://yourproject.com" target="_blank" class="demo-button"  onMouseOver={(e) => { e.preventDefault() }}>Live Demo</a>
                </div>
              </div>
            </div>
          </article>
          <article>
            <div className="article-wrapper">
              <figure>
                <img src={cooking_blog} alt="" />
              </figure>
              <div className="article-body">
                <h2>Cooking Blogs Nodejs</h2>
                <p className="project_txt_height">
                This project is a dynamic and user-friendly Cooking Blog powered by Node.js, Express.js, and MongoDB. It allows users to create, share, and discover delicious recipes in a seamless and interactive environment.
                </p>
                <div class="button-wrapper">
                  <a href="https://github.com/rohanh007/Cooking_Recipe_Blogs_nodejs_mongodb_expressjs" target="_blank" class="github-button">GitHub</a>
                  <a href="https://yourproject.com" target="_blank" class="demo-button">Live Demo</a>
                </div>
              </div>
            </div>
          </article>
          <article>
            <div className="article-wrapper">
              <figure>
                <img src={technews} alt="" />
              </figure>
              <div className="article-body">
                <h2>TechNews</h2>
                <p className="project_txt_height">
                build a simple TechNews website/app using Node.js, Express, EJS and we'll be also using some dependencies such as AXIOS, Body-Parser and Nodemon,also use news api.
                 </p>
                <div class="button-wrapper">
                  <a href="https://github.com/rohanh007/nodejs-technews-website.github.io" target="_blank" class="github-button">GitHub</a>
                  <a href="https://yourproject.com" target="_blank" class="demo-button">Live Demo</a>
                </div>
              </div>
            </div>
           </article>
          {/* <article>
            <div className="article-wrapper">
              <figure>
                <img src="https://picsum.photos/id/103/800/450" alt="" />
              </figure>
              <div className="article-body">
                <h2>This is some title</h2>
                <p>
                  Curabitur convallis ac quam vitae laoreet. Nulla mauris ante, euismod sed lacus sit amet, congue bibendum eros. Etiam mattis lobortis porta. Vestibulum ultrices iaculis enim imperdiet egestas.
                </p>
                <div class="button-wrapper" >
                  <a href="https://github.com/your-github-project" target="_blank" class="github-button">GitHub</a>
                  <a href="https://yourproject.com" target="_blank" class="demo-button">Live Demo</a>
                </div>
              </div>
            </div>
          </article>
          <article>
            <div className="article-wrapper">
              <figure>
                <img src="https://picsum.photos/id/103/800/450" alt="" />
              </figure>
              <div className="article-body">
                <h2>This is some title</h2>
                <p>
                  Curabitur convallis ac quam vitae laoreet. Nulla mauris ante, euismod sed lacus sit amet, congue bibendum eros. Etiam mattis lobortis porta. Vestibulum ultrices iaculis enim imperdiet egestas.
                </p>
                <div class="button-wrapper">
                  <a href="https://github.com/your-github-project" target="_blank" class="github-button">GitHub</a>
                  <a href="https://yourproject.com" target="_blank" class="demo-button">Live Demo</a>
                </div>
              </div>
            </div>
          </article>
          <article>
            <div class="article-wrapper">
              <figure>
                <img src="https://picsum.photos/id/103/800/450" alt="" />
              </figure>
              <div class="article-body">
                <h2>This is some title</h2>
                <p>
                  Curabitur convallis ac quam vitae laoreet. Nulla mauris ante, euismod sed lacus sit amet, congue bibendum eros. Etiam mattis lobortis porta. Vestibulum ultrices iaculis enim imperdiet egestas.
                </p>
                <div class="button-wrapper" onMouseOver={(e)=>e.stopPropagation()}>
                  <a href="https://github.com/your-github-project" target="_blank" class="github-button">GitHub</a>
                  <a href="https://yourproject.com" target="_blank" class="demo-button">Live Demo</a>
                </div>
              </div>
            </div>
          </article> */} 


        </section>
      </Container>
    </Container>

  );
}

export default Projects;
