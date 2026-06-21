import { fetchAPI } from "./api";

export const TIMES = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

const getApiTimes = (date) => {
  const targetDate = date ? new Date(date) : new Date();
  const api = typeof globalThis !== "undefined" ? globalThis.fetchAPI : undefined;
  if (typeof api === "function") {
    return api(targetDate);
  }
  return TIMES.slice();
};

export function initializeTimes(date) {
  return getApiTimes(date);
}

export function updateTimes(state, action) {
  const selectedDate = action?.date;
  if (!selectedDate) {
    return state;
  }
  return getApiTimes(selectedDate);
}

export default { TIMES, initializeTimes, updateTimes };
