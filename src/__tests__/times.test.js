import { initializeTimes, updateTimes } from "../state/times";

afterEach(() => {
  delete global.fetchAPI;
});

test("initializeTimes returns available times from fetchAPI", () => {
  global.fetchAPI = jest.fn(() => ["17:00", "18:00"]);

  const result = initializeTimes("2026-06-21");

  expect(result).toEqual(["17:00", "18:00"]);
  expect(global.fetchAPI).toHaveBeenCalled();
});

test("updateTimes returns API times for the selected date", () => {
  const selectedDate = "2026-06-21";
  global.fetchAPI = jest.fn(() => ["19:00", "20:00"]);

  const state = ["17:00", "18:00"];
  const action = { date: selectedDate };
  const result = updateTimes(state, action);

  expect(result).toEqual(["19:00", "20:00"]);
  expect(global.fetchAPI).toHaveBeenCalledWith(new Date(selectedDate));
});
