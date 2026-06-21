// Simple in-memory booking store (resets on page refresh)
const bookings = [];

export function addBooking(entry) {
  // entry: { date: 'YYYY-MM-DD', time: 'HH:MM' }
  bookings.push(entry);
}

export function isTimeTaken(date, time) {
  if (!date) return false;
  return bookings.some((b) => b.date === date && b.time === time);
}

export function getTimesForDate(date) {
  if (!date) return [];
  return bookings.filter((b) => b.date === date).map((b) => b.time);
}

export function getAllBookings() {
  return bookings.slice();
}

const bookingStore = {
  addBooking,
  isTimeTaken,
  getTimesForDate,
  getAllBookings,
};

export default bookingStore;
