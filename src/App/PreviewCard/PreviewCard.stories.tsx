import React from "react";
import { Meta, Story } from "@storybook/react";
import { PreviewCard, PreviewCardProps } from "./PreviewCard";
import { BrowserRouter } from "react-router-dom";

export default {
  title: "PreviewCard",
  component: PreviewCard,
} as Meta;

const Template: Story<PreviewCardProps> = (args) => (
  <BrowserRouter>
    <PreviewCard {...args} />
  </BrowserRouter>
);

export const PreviewCardWithPath = Template.bind({});
PreviewCardWithPath.args = {
  title: "Thing with path defined",
  description: "This thing has a link to the thing.",
  path: "/path/to/thing",
};

export const PreviewCardLoading: Story<PreviewCardProps> = (args) => (
  <PreviewCard {...args}>
    <div />
  </PreviewCard>
);
PreviewCardLoading.args = {
  title: "Thing that's loading",
  description: "This loading thing is really cool.",
  loading: true,
};

export const PreviewCardWithChildren: Story<PreviewCardProps> = (args) => (
  <PreviewCard {...args}>
    <img src={"https://picsum.photos/2000/500"} alt={"random thing"} />
  </PreviewCard>
);
PreviewCardWithChildren.args = {
  title: "Thing with children",
  description: "This thing has children to show.",
};
