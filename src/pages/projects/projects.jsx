import React from "react";
import TopMenu from "../../components/top-menu/top-menu";

import { projects } from "./project.data";

import "./projects.css";

const Projects = () => {
  return (
    <div className="projects-page">
      <p>OUR PROJECTS</p>
      <div className="categories">
        <div className="category-menu">
          <ul>
            <li className="active">ALL</li>
            <li>RESEDENTIAL</li>
            <li>COMMERCIAL</li>
          </ul>
        </div>
        <div className="category-body">
          {projects.map((project) => (
            <div
              className={`image-container ${project.large ? "large" : ""} ${
                project.middle ? "middle" : ""
              } ${project.small ? "small" : ""}`}
              key={project.id}
            >
              <img src={project.imgUrl} alt="category" />
              <p>{project.title.toUpperCase()}</p>
              <div className="project-footer">
                <span>{project.country.toUpperCase()}</span>
                <span>{project.measure.toUpperCase()}</span>
                <span>{project.year}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="have-idea">
        <p>
          SIZDA G'OYA BORMI? <br /> BIZGA AYTING!
        </p>
        <div
          className="request"
          onClick={() => <TopMenu show_request={true} />}
        >
          DROP REQUEST
        </div>
      </div>
      <div className="footer">
        <span>&copy; 2022. All rights reserved.</span>
        <span>UzbekHouses</span>
      </div>
    </div>
  );
};

export default Projects;
