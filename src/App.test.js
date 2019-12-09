import React from "react";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";

afterEach(rtl.cleanup);

it("renders without crashing", () => {
  const wrapper = rtl.render(<span className="greet">hello world</span>);
  const element = wrapper.queryByText(/hello/i);
  expect(element).toBeTruthy();
  expect(element).toBeInTheDocument();
  expect(element).toBeVisible();
});

it('renders "all about kittens" text', () => {
  const wrapper = rtl.render(<App />);
  expect(wrapper.getByText(/all about kittens/i));
});
