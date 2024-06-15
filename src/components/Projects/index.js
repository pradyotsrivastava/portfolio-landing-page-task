import React from "react";
import { useState } from "react";
import {
  Container,
  Wrapper,
  Title,
  Desc,
  CardContainer,
  ToggleButtonGroup,
  ToggleButton,
  Divider,
} from "./ProjectsStyle";
import ProjectCard from "../Cards/ProjectCards";
import { projects } from "./data";

const Projects = ({ openModal, setOpenModal }) => {
  const [toggle, setToggle] = useState("all");
  const toggleOptions = ["NEXT", "MERN", "React", "Mini", "Major"];

  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>Take a look at some of the projects I've worked on.</Desc>
        <ToggleButtonGroup>
          {toggle === "all" ? (
            <ToggleButton active value="all" onClick={() => setToggle("all")}>
              ALL
            </ToggleButton>
          ) : (
            <ToggleButton value="all" onClick={() => setToggle("all")}>
              ALL
            </ToggleButton>
          )}
          {toggleOptions.map((option) => (
            <>
              <Divider />
              <ToggleButton
                key={option}
                active={toggle === option}
                value={option}
                onClick={() => setToggle(option)}
              >
                {option.toUpperCase()}
              </ToggleButton>
            </>
          ))}
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === "all" &&
            projects.map((project) => (
              <ProjectCard
                project={project}
                openModal={openModal}
                setOpenModal={setOpenModal}
              />
            ))}
          {projects
            .filter((item) => item.category == toggle)
            .map((project) => (
              <ProjectCard
                project={project}
                openModal={openModal}
                setOpenModal={setOpenModal}
              />
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Projects;
