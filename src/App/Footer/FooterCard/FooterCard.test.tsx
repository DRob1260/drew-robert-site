import React from "react";
import { axe } from "jest-axe";
import { render, fireEvent } from "@testing-library/react";
import { FooterCard } from "./FooterCard";
import { DesktopMac, LaptopMac, PhoneIphone } from "@material-ui/icons";

it("is accessible", async () => {
  const { container } = render(
    <FooterCard
      title={"Google"}
      actions={{
        open: {
          value: "www.google.com",
          label: "Visit Google",
          button: { color: "red" },
        },
        copy: {
          value: "https://www.google.com",
          label: "Copy URL",
          button: { color: "blue" },
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
            button: { color: "red" },
          },
        }}
      />
    );
    expect(getByTestId("footer-card-actions")).not.toBeVisible();
    fireEvent.mouseEnter(getByTestId("footer-card-muipaper"));
    expect(getByTestId("footer-card-actions")).toBeVisible();
    fireEvent.mouseLeave(getByTestId("footer-card-muipaper"));
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
        writeText: () => {
          /* do nothing */
        },
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
  it("can include a button to launch a function", () => {
    const mockFunction = jest.fn();

    const { queryByTestId, getByTestId } = render(
      <FooterCard
        actions={{ launch: { value: mockFunction, label: "Mock function" } }}
      />
    );

    expect(queryByTestId("footer-card-launch-button")).not.toBeNull();
    fireEvent.click(getByTestId("footer-card-launch-button-iconbutton"));
    expect(mockFunction).toHaveBeenCalledTimes(1);
  });
  it("hides the launch button if values are not provided", () => {
    const { queryByTestId } = render(<FooterCard actions={{}} />);
    expect(queryByTestId("footer-card-launch-button")).toBeNull();
  });
  it("allows default icons to be overridden", () => {
    const { queryByTestId } = render(
      <FooterCard
        actions={{
          open: {
            value: "icon-1",
            label: "icon-1",
            button: { icon: <DesktopMac data-testid={"icon-1"} /> },
          },
          copy: {
            value: "icon-2",
            label: "icon-2",
            button: { icon: <LaptopMac data-testid={"icon-2"} /> },
          },
          launch: {
            value: () => {
              /* do nothing */
            },
            label: "icon-3",
            button: { icon: <PhoneIphone data-testid={"icon-3"} /> },
          },
        }}
      />
    );
    expect(queryByTestId("icon-1")).not.toBeNull();
    expect(queryByTestId("icon-2")).not.toBeNull();
    expect(queryByTestId("icon-3")).not.toBeNull();
  });
});
