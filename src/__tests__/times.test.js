import { initializeTimes, updateTimes, TIMES } from "../state/times";

test("initializeTimes returns the full TIMES array", () => {
  const result = initializeTimes("2026-06-21");
  expect(result).toEqual(TIMES);
});

test("updateTimes returns the provided state unchanged", () => {
  const state = ["17:00", "18:00"];
  const action = { type: "DUMMY" };
  const result = updateTimes(state, action);
  expect(result).toBe(state);
});
