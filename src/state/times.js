export const TIMES = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

// Initialize times for a date (currently returns full TIMES list)
export function initializeTimes(date) {
  // date param kept for future logic
  return TIMES.slice();
}

// Reducer-style updater (currently returns the passed state unchanged)
export function updateTimes(state, action) {
  // action param is kept for future logic
  return state;
}

export default { TIMES, initializeTimes, updateTimes };
