import React from "react";
import { axe } from "jest-axe";
import { render } from "@testing-library/react";
import { PreviewCard } from "./PreviewCard";
import { BrowserRouter } from "react-router-dom";

it("should be accessible", async () => {
  const { container } = render(
    <BrowserRouter>
      <PreviewCard
        title={"My Project"}
        description={"This project is super awesome."}
        path={"/path/to/awesome/project"}
      >
        <div>
          <p>My super awesome project.</p>
        </div>
      </PreviewCard>
    </BrowserRouter>
  );
  expect(await axe(container)).toHaveNoViolations();
});

describe("path prop", () => {
  it("includes a link to the project if path prop is provided", () => {
    const { queryByTestId } = render(
      <BrowserRouter>
        <PreviewCard
          title={"My Project"}
          description={"This project is super awesome."}
          path={"/path/to/awesome/project"}
        />
      </BrowserRouter>
    );
    expect(queryByTestId("visit-project-button")).not.toBeNull();
  });

  it("does not include a link to the project if the path prop is not provided", () => {
    const { queryByTestId } = render(
      <PreviewCard
        title={"My Project"}
        description={"This project is super awesome."}
      />
    );
    expect(queryByTestId("visit-project-button")).toBeNull();
  });
});

describe("title and description props", () => {
  it("displays the given title and description", () => {
    const { queryByText } = render(
      <PreviewCard
        title={"My Project"}
        description={"This project is super awesome."}
      />
    );
    expect(queryByText("My Project")).not.toBeNull();
    expect(queryByText("This project is super awesome.")).not.toBeNull();
  });
});

describe("loading prop", () => {
  it("displays a placeholder with spinner if loading prop is true", () => {
    const { queryByTestId } = render(
      <PreviewCard
        title={"My Project"}
        description={"This project is super awesome."}
        loading={true}
      />
    );
    expect(queryByTestId("loading-indicator-container")).toBeVisible();
  });
  it("does not display a placeholder with spinner if loading prop is false", () => {
    const { queryByTestId } = render(
      <PreviewCard
        title={"My Project"}
        description={"This project is super awesome."}
        loading={false}
      />
    );
    expect(queryByTestId("loading-indicator-container")).not.toBeVisible();
  });
});

it("displays children", () => {
  const { queryByTestId } = render(
    <PreviewCard
      title={"My Project"}
      description={"This project is super awesome."}
    >
      <div data-testid={"my-children"} />
    </PreviewCard>
  );
  expect(queryByTestId("my-children")).not.toBeNull();
});
