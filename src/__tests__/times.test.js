afterEach(() => {
  jest.resetModules();
  jest.clearAllMocks();
});

test("initializeTimes returns available times from fetchAPI", () => {
  jest.doMock("../state/api", () => ({
    fetchAPI: jest.fn(() => ["17:00", "18:00"]),
  }));

  const { initializeTimes } = require("../state/times");
  const api = require("../state/api");

  const result = initializeTimes("2026-06-21");

  expect(result).toEqual(["17:00", "18:00"]);
  expect(api.fetchAPI).toHaveBeenCalled();
});

test("updateTimes returns API times for the selected date", () => {
  const selectedDate = "2026-06-21";

  jest.doMock("../state/api", () => ({
    fetchAPI: jest.fn(() => ["19:00", "20:00"]),
  }));

  const { updateTimes } = require("../state/times");
  const api = require("../state/api");

  const state = ["17:00", "18:00"];
  const action = { date: selectedDate };
  const result = updateTimes(state, action);

  expect(result).toEqual(["19:00", "20:00"]);
  expect(api.fetchAPI).toHaveBeenCalledWith(new Date(selectedDate));
});
