import React from "react";
import { useEffect } from "react";
import { FaGithub } from "react-icons/fa";
import { Container, Row, Col, Button } from "react-bootstrap";
// import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

const  Projects=()=>{
  
  return (
    <Container fluid className="project-section">
      {/* <Particle /> */}
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="orangered">Works </strong>
        </h1>
        <p style={{ color: "white" }} className="web-text-color">
          Here are a few projects I've worked on recently.
        </p>
        <section className="articles">
          <article>
            <div className="article-wrapper">
              <figure>
                <img src="https://picsum.photos/id/1011/800/450" alt="" />
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
            <div className="article-wrapper">
              <figure>
                <img src="https://picsum.photos/id/1005/800/450" alt="" />
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
                <div class="button-wrapper">
                  <a href="https://github.com/your-github-project" target="_blank" class="github-button">GitHub</a>
                  <a href="https://yourproject.com" target="_blank" class="demo-button">Live Demo</a>
                </div>
              </div>
            </div>
          </article>


        </section>
      </Container>
    </Container>

  );
}

export default Projects;
