import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

jest.mock("../state/times", () => ({
  initializeTimes: jest.fn(() => ["17:00", "18:00"]),
  updateTimes: jest.fn(() => ["17:00", "18:00"]),
}));

import BookingForm from "../components/BookingForm";

test("renders the BookingForm heading", () => {
  render(<BookingForm />);
  const headingElement = screen.getByText("Book a Table");
  expect(headingElement).toBeInTheDocument();
});

test("date input has type date", () => {
  render(<BookingForm />);
  const dateInput = screen.getByLabelText(/Choose date/i);
  expect(dateInput).toHaveAttribute("type", "date");
});

test("guests input has min 1 and max 10", () => {
  render(<BookingForm />);
  const guestsInput = screen.getByLabelText(/Number of guests/i);
  expect(guestsInput).toHaveAttribute("type", "number");
  expect(guestsInput).toHaveAttribute("min", "1");
  expect(guestsInput).toHaveAttribute("max", "10");
});

test("occasion select contains Birthday and Anniversary options", () => {
  render(<BookingForm />);
  const occasionSelect = screen.getByLabelText(/Occasion/i);
  expect(occasionSelect).toBeInTheDocument();
  expect(screen.getByRole("option", { name: /Birthday/i })).toBeInTheDocument();
  expect(screen.getByRole("option", { name: /Anniversary/i })).toBeInTheDocument();
});
