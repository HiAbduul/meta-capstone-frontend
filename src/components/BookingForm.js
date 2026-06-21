import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import bookingStore from "../state/bookingStore";

const schema = yup.object({
  date: yup.string().required("Please select a date"),
  time: yup.string().required("Please select a time"),
  guests: yup.number().typeError("Please provide a valid number").min(1, "There must be at least 1 guest!").max(10, "Maximum 10 guests").required("Please specify number of guests per table!"),
  occasion: yup.string().notRequired(),
});

export default function BookingForm() {
  const [submittedData, setSubmittedData] = useState(null);
  const {
    handleSubmit,
    register,
    reset,
    watch,
    setError,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: { occasion: "Birthday", time: "18:00", guests: 1 },
  });

  const TIMES = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

  const formSubmit = (data) => {
    // prevent double-booking (in-memory)
    if (bookingStore.isTimeTaken(data.date, data.time)) {
      setError("time", { type: "manual", message: "Selected time is already booked for this date" });
      return;
    }

    bookingStore.addBooking({ date: data.date, time: data.time });
    setSubmittedData(data);
    reset();
  };

  const handleEdit = () => setSubmittedData(null);

  if (submittedData) {
    return (
      <div className="booking-summary">
        <h2>Booking confirmed</h2>
        <p>Thank you — here are the details you provided:</p>
        <div className="booking-summary-grid single-row">
          <div>
            <span>Date</span>
            <strong>{submittedData.date}</strong>
          </div>
          <div>
            <span>Time</span>
            <strong>{submittedData.time}</strong>
          </div>
          <div>
            <span>Guests</span>
            <strong>{submittedData.guests}</strong>
          </div>
          <div>
            <span>Occasion</span>
            <strong>{submittedData.occasion && submittedData.occasion !== "select" ? submittedData.occasion : "No preference"}</strong>
          </div>
        </div>
        <button type="button" className="booking-btn secondary" onClick={handleEdit}>
          Make another booking
        </button>
      </div>
    );
  }

  return (
    <div className="form">
      <h1>Book a Table</h1>
      <p>Complete the form below to review and confirm your booking instantly.</p>

      <form onSubmit={handleSubmit(formSubmit)} className="compact-booking-form">
        <fieldset>
          <label htmlFor="res-date">Choose date</label>
          <input id="res-date" type="date" {...register("date")} />
          <span className="error-message">{errors.date?.message}</span>

          <label htmlFor="res-time">Choose time</label>
          {(() => {
            const selectedDate = watch("date");
            const taken = bookingStore.getTimesForDate(selectedDate);
            const available = TIMES.filter((t) => !taken.includes(t));
            if (!selectedDate) {
              return (
                <select id="res-time" {...register("time")}>
                  <option value="">Select a date first</option>
                </select>
              );
            }
            if (available.length === 0) {
              return (
                <select id="res-time" {...register("time")}>
                  <option value="">No available times</option>
                </select>
              );
            }

            return (
              <select id="res-time" {...register("time")}>
                {available.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            );
          })()}
          <span className="error-message">{errors.time?.message}</span>

          <label htmlFor="guests">Number of guests</label>
          <input id="guests" type="number" placeholder="1" min="1" max="10" {...register("guests")} />
          <span className="error-message">{errors.guests?.message}</span>

          <label htmlFor="occasion">Occasion</label>
          <select id="occasion" {...register("occasion")}>
            <option>Birthday</option>
            <option>Anniversary</option>
          </select>

          <input className="booking-btn" type="submit" value="Make Your booking" />
        </fieldset>
      </form>
    </div>
  );
}
