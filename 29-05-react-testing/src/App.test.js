import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("button click flow", () => {
  render(<App />);
  const buttonElement = screen.getByRole("button", { name: /Farbe zu blau wechseln/i });
  expect(buttonElement).toHaveClass("rot");

  // Button klicken
  fireEvent.click(buttonElement);
  // Buttonelement hat die Klasse "blau"
  expect(buttonElement).toHaveClass("blau");
});

test("checkbox click flow", () => {
  render(<App />);

  // Elemente finden
  const buttonElement = screen.getByRole("button", { name: /Farbe zu blau wechseln/i });
  const checkBoxElement = screen.getByRole("checkbox", { name: /disable button/i });

  // Check initialer Zustand unserer Elemente
  expect(buttonElement).toBeEnabled();
  expect(buttonElement).toHaveClass("rot"); // initial color
  expect(checkBoxElement).not.toBeChecked();

  // Click checkbox um button zu disablen
  fireEvent.click(checkBoxElement);
  expect(checkBoxElement).toBeChecked();
  expect(buttonElement).toBeDisabled();
  expect(buttonElement).toHaveClass("gray");

  // Click checkbox um button wieder zu enablen
  fireEvent.click(checkBoxElement);
  expect(checkBoxElement).not.toBeChecked();
  expect(buttonElement).toBeEnabled();
  expect(buttonElement).toHaveClass("rot"); // initial color
});
