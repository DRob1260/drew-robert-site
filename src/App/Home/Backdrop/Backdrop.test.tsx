import React from "react";
import { axe } from "jest-axe";
import { render, waitFor, fireEvent } from "@testing-library/react";
import { Backdrop } from "./Backdrop";
import { flickrUserPhotoUrls } from "../../../mocks/gallery/flickrUserPhotoUrls";

it("should be accessible", async () => {
  const { container, queryByTestId } = render(<Backdrop />);
  await waitFor(() => expect(queryByTestId("backdrop-image")).not.toBeNull());
  expect(await axe(container)).toHaveNoViolations();
});

it("displays a background image from the flickr feed", async () => {
  const { queryByTestId, getByTestId } = render(<Backdrop />);
  await waitFor(() => expect(queryByTestId("backdrop-image")).not.toBeNull());
  expect(getByTestId("backdrop-image")).toHaveAttribute(
    "src",
    flickrUserPhotoUrls[0]
  );
});

it("displays the full photo after clicking the full screen button", async () => {
  const { getByTestId, queryByTestId } = render(<Backdrop />);
  await waitFor(() => expect(queryByTestId("backdrop-image")).not.toBeNull());
  fireEvent.click(getByTestId("full-screen-button"));
  await waitFor(() => expect(queryByTestId("full-screen-image")).toBeVisible());
});

it("includes a link to the flickr feed in the full-screen modal", async () => {
  const { getByTestId, queryByTestId } = render(<Backdrop />);
  await waitFor(() => expect(queryByTestId("backdrop-image")).not.toBeNull());
  fireEvent.click(getByTestId("full-screen-button"));
  await waitFor(() => expect(queryByTestId("flickr-link")).toBeVisible());
  expect(getByTestId("flickr-link")).toHaveAttribute(
    "href",
    "https://www.flickr.com/photos/69728079@N03"
  );
});

it("has a button to exit the modal", async () => {
  const { getByTestId, queryByTestId } = render(<Backdrop />);
  await waitFor(() => expect(queryByTestId("backdrop-image")).not.toBeNull());
  fireEvent.click(getByTestId("full-screen-button"));
  await waitFor(() =>
    expect(queryByTestId("full-screen-exit-button")).toBeVisible()
  );
  fireEvent.click(getByTestId("full-screen-exit-button"));
  await waitFor(() => expect(queryByTestId("full-screen-image")).toBeNull());
});
