import React from "react";
import { axe } from "jest-axe";
import { render, waitFor } from "@testing-library/react";
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
