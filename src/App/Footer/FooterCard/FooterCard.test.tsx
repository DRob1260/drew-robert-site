import React from "react";
import { axe } from "jest-axe";
import { render } from "@testing-library/react";
import { FooterCard } from "./FooterCard";

it("is accessible", async () => {
  const { container } = render(
    <FooterCard
      title={"Google"}
      actions={{
        open: {
          value: "www.google.com",
          label: "Visit Google",
          color: "red",
        },
        copy: {
          value: "https://www.google.com",
          label: "Copy URL",
          color: "blue",
        },
      }}
    >
      <p>This is a test</p>
    </FooterCard>
  );
  expect(await axe(container)).toHaveNoViolations();
});

it("displays children", () => {
  const { queryByText } = render(
    <FooterCard>
      <p>I am the child</p>
    </FooterCard>
  );
  expect(queryByText("I am the child")).not.toBeNull();
});

it("displays title", () => {
  const { queryByText } = render(<FooterCard title={"I am the title"} />);
  expect(queryByText("I am the title")).not.toBeNull();
});

it("can include a button to open a URL", () => {
  const { queryByTestId } = render(
    <FooterCard
      actions={{
        open: {
          value: "https://www.drewrobert.com",
          label: "Open drewrobert.com",
        },
      }}
    />
  );
  expect(queryByTestId("footer-card-open-button")).not.toBeNull();
});

it("can include a button to copy a value", () => {
  const { queryByTestId } = render(
    <FooterCard
      actions={{
        copy: {
          value: "https://www.drewrobert.com",
          label: "Copy url",
        },
      }}
    />
  );
  expect(queryByTestId("footer-card-copy-button")).not.toBeNull();
});
