import React from "react";
import { axe } from "jest-axe";
import { render, fireEvent } from "@testing-library/react";
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

describe("actions", () => {
  it("hides actions when not hovering over card", () => {
    const { getByTestId } = render(
      <FooterCard
        actions={{
          open: {
            value: "www.google.com",
            label: "Visit Google",
            color: "red",
          },
        }}
      />
    );
    expect(getByTestId("footer-card-actions")).not.toBeVisible();
    fireEvent.mouseEnter(getByTestId("footer-card-muicard"));
    expect(getByTestId("footer-card-actions")).toBeVisible();
    fireEvent.mouseLeave(getByTestId("footer-card-muicard"));
    expect(getByTestId("footer-card-actions")).not.toBeVisible();
  });
  it("can include a button to open a URL", () => {
    global.open = jest.fn();
    const { queryByTestId, getByTestId } = render(
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
    fireEvent.click(getByTestId("footer-card-open-button-iconbutton"));
    expect(global.open).toBeCalledWith("https://www.drewrobert.com");
  });
  it("hides the open button if values are not provided", () => {
    const { queryByTestId } = render(<FooterCard actions={{}} />);
    expect(queryByTestId("footer-card-open-button")).toBeNull();
  });
  it("can include a button to copy a value", () => {
    Object.assign(navigator, {
      clipboard: {
        writeText: () => {},
      },
    });
    jest.spyOn(navigator.clipboard, "writeText");

    const { queryByTestId, getByTestId } = render(
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
    fireEvent.click(getByTestId("footer-card-copy-button-iconbutton"));
    expect(navigator.clipboard.writeText).toHaveBeenCalledWith(
      "https://www.drewrobert.com"
    );
  });
  it("hides the copy button if values are not provided", () => {
    const { queryByTestId } = render(<FooterCard actions={{}} />);
    expect(queryByTestId("footer-card-copy-button")).toBeNull();
  });
});
