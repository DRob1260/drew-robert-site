import React from "react";
import { DependencyCredits } from "./DependencyCredits";

export default {
  title: "DependencyCredits",
  component: DependencyCredits,
  decorators: [
    (Story: React.FunctionComponent) => (
      <div style={{ height: "100vh" }}>
        <Story />
      </div>
    ),
  ],
};

export const DependencyCreditsDefault = () => <DependencyCredits />;
