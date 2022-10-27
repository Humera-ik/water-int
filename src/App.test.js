import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/Water Intake Tracker/i);
  expect(linkElement).toBeInTheDocument();
});
