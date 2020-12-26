import React from "react";
import { Story } from "@storybook/react";
import { Projects } from "./Projects";
import { BrowserRouter } from "react-router-dom";

export default {
  title: "Projects",
  component: Projects,
};

export const ProjectsDefault: Story = () => (
  <BrowserRouter>
    <Projects />
  </BrowserRouter>
);
