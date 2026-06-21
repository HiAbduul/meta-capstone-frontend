import { useNavigate } from "react-router";
import BookingForm from "../components/BookingForm";
import { submitAPI } from "../state/api";

export default function BookingPage() {
  const navigate = useNavigate();

  const submitForm = (formData) => {
    const success = submitAPI(formData);
    if (success) {
      navigate("/booking/confirmed");
      return true;
    }
    return false;
  };

  return (
    <main className="page-main">
      <div className="res-content-wrapper">
        <div className="res-content-container">
          <div className="text">
            <h2>Book a table for a bright Mediterranean dining experience.</h2>
            <p>Plan your visit with confidence — our cozy, modern restaurant is perfect for intimate dinners, celebrations, and relaxed meals with friends.</p>
            <p>Select your preferred date and time, and we will reserve a comfortable table for your party. We look forward to serving you with fresh flavors and warm hospitality.</p>
          </div>
          <BookingForm submitForm={submitForm} />
        </div>
      </div>
    </main>
  );
}
