import { render, screen } from "@testing-library/react";
import React from "react";
import App from "../src/App.jsx";

describe("App tests", () => {
  it("should contains the heading 1", () => {
    render(<App />);
    const heading = screen.getByText(/Bienvenidos a la App de Countries/i);
    expect(heading).toBeInTheDocument();
  });
});
