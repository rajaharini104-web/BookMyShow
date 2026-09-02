import { useNavigate } from "react-router-dom";

function EventConfirmation() {
  const navigate = useNavigate();

  const savedBooking =
    localStorage.getItem("eventBooking");

  console.log("RECEIVED BOOKING:", savedBooking);

  if (!savedBooking) {
    return (
      <div>
        <h1>No booking data found</h1>

        <button
          onClick={() => navigate("/events")}
        >
          Go to Events
        </button>
      </div>
    );
  }

  const booking = JSON.parse(savedBooking);

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "50px",
        textAlign: "center",
      }}
    >
      <h1>🎉 Booking Successful!</h1>

      <h2>{booking.event.title}</h2>

      <img
        src={booking.event.image}
        alt={booking.event.title}
        style={{
          width: "300px",
          borderRadius: "15px",
        }}
      />

      <p>📅 {booking.event.date}</p>

      <p>🕒 {booking.event.time}</p>

      <p>📍 {booking.event.venue}</p>

      <p>
        🎟️ Tickets: {booking.tickets}
      </p>

      <h2>
        ₹{booking.totalPrice}
      </h2>

      <p>
        Booking ID: {booking.bookingId}
      </p>
    </div>
  );
}

export default EventConfirmation;