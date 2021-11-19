import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import ListProjectsGrid from "../components/ListProjectsGrid";
import { Hero, Box } from "../components/ui";

const Projects = () => {
  return (
    <>
      <Hero
        hasSubMenu
        py={3}
        heroImage={<FontAwesomeIcon icon={faCode} size="4x" />}
        heroTitle="Current Projects"
        heroSummary="I build fast and beautiful websites and applications using modern tech stacks."
      ></Hero>
      <Box withContainer mt={3}>
        <ListProjectsGrid />
      </Box>
    </>
  );
};

export default Projects;
