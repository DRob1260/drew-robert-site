import packageJson from "../../../package.json";
import { Dependency } from "../../models/DependencyCredits/Dependency";
import { FeaturedDependency } from "../../models/DependencyCredits/FeaturedDependency";

const npmPackageUrl = "https://www.npmjs.com/package";

export const getDependencies = (): Dependency[] => {
  return Object.keys(packageJson.dependencies).map((dependencyName) => {
    return {
      name: dependencyName,
      url: `${npmPackageUrl}/${dependencyName}`,
    };
  });
};

export const getDevDependencies = (): Dependency[] => {
  return Object.keys(packageJson.devDependencies).map((dependencyName) => {
    return {
      name: dependencyName,
      url: `${npmPackageUrl}/${dependencyName}`,
    };
  });
};

export const featuredDependencies: FeaturedDependency[] = [
  {
    name: "react",
    url: "https://www.npmjs.com/package/react",
    description:
      "The core library used for this website is React, which has made it easy to build a single-page application with small, reusable components.",
  },
  {
    name: "@material-ui/core",
    url: "https://www.npmjs.com/package/@material-ui/core",
    description:
      "The bulk of this website uses components from Material-UI, which makes it dead-simple to build an interface with a Material Design style.",
  },
  {
    name: "typescript",
    url: "https://www.npmjs.com/package/typescript",
    description:
      "TypeScript has been a great tool while developing this project, allowing all of my objects and functions to have strict type definitions.",
  },
  {
    name: "@storybook/react",
    url: "https://www.npmjs.com/package/@storybook/react",
    description:
      "Storybook allows me to build components in isolation before implementing them into the site.",
  },
  {
    name: "prettier",
    url: "https://www.npmjs.com/package/prettier",
    description:
      "Prettier ensures my code formatting will be consistent without needing to think about it.",
  },
  {
    name: "eslint",
    url: "https://www.npmjs.com/package/eslint",
    description:
      "ESLint allows me to add strict rules to my code and surface undesirable patterns.",
  },
];
