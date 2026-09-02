import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function EventBooking() {
  const navigate = useNavigate();
  const location = useLocation();

  // Get selected event from Events page
  const event = location.state?.event;

  // Number of tickets
  const [tickets, setTickets] = useState(1);

  // If event data is missing
  if (!event) {
    return (
      <div className="event-not-found-page">
        <div className="event-not-found-box">
          <div className="not-found-icon">🎟️</div>

          <h1>Event Not Found</h1>

          <p>
            Please go back to the events page and select an event.
          </p>

          <button onClick={() => navigate("/events")}>
            Explore Events →
          </button>
        </div>
      </div>
    );
  }

  // Convert price safely to number
  const ticketPrice = Number(event.price) || 0;

  // Calculate total price
  const totalPrice = ticketPrice * tickets;

  // Increase ticket count
  const increaseTickets = () => {
    setTickets((prev) => prev + 1);
  };

  // Decrease ticket count
  const decreaseTickets = () => {
    setTickets((prev) => {
      if (prev > 1) {
        return prev - 1;
      }
      return 1;
    });
  };

  // Continue to confirmation
  const handleBooking = () => {
    // Create unique booking ID
    const bookingId = `BMS-${Date.now()}-${Math.floor(
      Math.random() * 1000
    )}`;

    // Create booking object
    const bookingData = {
      event: event,
      tickets: tickets,
      totalPrice: totalPrice,
      bookingId: bookingId,
      bookedAt: new Date().toLocaleString(),
    };

    // Save booking data
    localStorage.setItem(
      "eventBooking",
      JSON.stringify(bookingData)
    );

    // Check in browser console
    console.log("Booking saved successfully:", bookingData);

    // Navigate ONLY after saving
    navigate("/event-confirmation");
  };

  return (
    <div className="event-booking-page">

      {/* BACK BUTTON */}
      <button
        type="button"
        className="back-events-btn"
        onClick={() => navigate("/events")}
      >
        ← Back to Events
      </button>


      <div className="event-booking-container">

        {/* LEFT SIDE - EVENT DETAILS */}
        <div className="event-booking-left">

          {/* EVENT IMAGE */}
          <div className="booking-event-image">

            <img
              src={event.image}
              alt={event.title}
            />

            <div className="booking-image-overlay"></div>

            <div className="booking-event-category">
              {event.icon} {event.category}
            </div>

          </div>


          {/* EVENT DETAILS */}
          <div className="booking-event-details">

            <h1>{event.title}</h1>

            <p className="booking-event-description">
              {event.description}
            </p>


            {/* DATE */}
            <div className="booking-detail-item">

              <span className="booking-detail-icon">
                📅
              </span>

              <div>
                <small>DATE</small>

                <strong>
                  {event.date}
                </strong>
              </div>

            </div>


            {/* TIME */}
            <div className="booking-detail-item">

              <span className="booking-detail-icon">
                🕒
              </span>

              <div>
                <small>TIME</small>

                <strong>
                  {event.time}
                </strong>
              </div>

            </div>


            {/* VENUE */}
            <div className="booking-detail-item">

              <span className="booking-detail-icon">
                📍
              </span>

              <div>
                <small>VENUE</small>

                <strong>
                  {event.venue}
                </strong>
              </div>

            </div>

          </div>

        </div>


        {/* RIGHT SIDE - BOOKING SECTION */}
        <div className="event-booking-right">

          <div className="booking-card">

            <p className="booking-card-small-title">
              SELECT TICKETS
            </p>

            <h2>Book Your Experience</h2>

            <p className="booking-card-subtitle">
              Choose how many tickets you would like.
            </p>


            {/* PRICE */}
            <div className="booking-ticket-price">

              <span>
                Price per ticket
              </span>

              <strong>
                ₹{ticketPrice.toLocaleString("en-IN")}
              </strong>

            </div>


            {/* TICKET COUNTER */}
            <div className="ticket-counter-section">

              <span>
                Number of Tickets
              </span>


              <div className="ticket-counter">

                <button
                  type="button"
                  onClick={decreaseTickets}
                  disabled={tickets === 1}
                >
                  −
                </button>


                <strong>
                  {tickets}
                </strong>


                <button
                  type="button"
                  onClick={increaseTickets}
                >
                  +
                </button>

              </div>

            </div>


            {/* BOOKING SUMMARY */}
            <div className="booking-price-summary">

              <div className="booking-summary-row">

                <span>
                  Tickets × {tickets}
                </span>

                <strong>
                  ₹{totalPrice.toLocaleString("en-IN")}
                </strong>

              </div>


              <div className="booking-summary-row">

                <span>
                  Booking Fee
                </span>

                <strong>
                  ₹0
                </strong>

              </div>


              <div className="booking-summary-line"></div>


              <div className="booking-total">

                <span>
                  Total Amount
                </span>

                <strong>
                  ₹{totalPrice.toLocaleString("en-IN")}
                </strong>

              </div>

            </div>


            {/* CONTINUE BUTTON */}
            <button
              type="button"
              className="booking-confirm-button"
              onClick={handleBooking}
            >
              Continue to Confirmation →
            </button>


            {/* SECURITY MESSAGE */}
            <p className="booking-security-note">
              🔒 Your booking details are securely processed
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}

export default EventBooking;