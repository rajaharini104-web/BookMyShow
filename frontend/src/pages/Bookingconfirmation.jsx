import { useLocation, useNavigate, useParams } from "react-router-dom";

function BookingConfirmation() {
  const location = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();

  const booking = location.state || {};

  const movieNames = {
    coolie: "Coolie",
    war2: "War 2",
    saiyaara: "Saiyaara",
    superman: "Superman",
  };

  const movieName =
    movieNames[id] || "Movie";

  const bookingId =
    "BK" +
    Math.floor(100000 + Math.random() * 900000);

  const bookingDate =
    new Date().toLocaleDateString("en-IN");

  if (!booking.selectedSeats) {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#f5f5f5",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <h2>No booking information found</h2>

          <button
            onClick={() => navigate("/")}
            style={{
              padding: "12px 25px",
              background: "#e50914",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            Go Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #111, #2a0000)",
        padding: "50px 20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* SUCCESS */}
      <div
        style={{
          textAlign: "center",
          color: "white",
          marginBottom: "30px",
        }}
      >
        <div
          style={{
            fontSize: "55px",
          }}
        >
          ✓
        </div>

        <h1>Booking Successful!</h1>

        <p style={{ color: "#ccc" }}>
          Your movie tickets have been confirmed.
        </p>
      </div>

      {/* TICKET */}
      <div
        style={{
          maxWidth: "650px",
          margin: "auto",
          background: "white",
          borderRadius: "20px",
          overflow: "hidden",
          boxShadow:
            "0 20px 50px rgba(0,0,0,0.4)",
        }}
      >
        {/* TICKET HEADER */}
        <div
          style={{
            background: "#e50914",
            color: "white",
            padding: "25px",
          }}
        >
          <p
            style={{
              margin: 0,
              fontSize: "13px",
              opacity: 0.8,
            }}
          >
            MOVIE TICKET
          </p>

          <h1
            style={{
              margin: "8px 0 0",
            }}
          >
            {movieName}
          </h1>
        </div>

        {/* TICKET BODY */}
        <div style={{ padding: "30px" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "1fr 1fr",
              gap: "25px",
            }}
          >
            <Info
              label="THEATRE"
              value={
                booking.theatre ||
                "Not available"
              }
            />

            <Info
              label="LOCATION"
              value={
                booking.location ||
                "Dindigul"
              }
            />

            <Info
              label="SHOW TIME"
              value={
                booking.time ||
                "Not available"
              }
            />

            <Info
              label="DATE"
              value={bookingDate}
            />

            <Info
              label="SEATS"
              value={booking.selectedSeats.join(
                ", "
              )}
            />

            <Info
              label="TICKETS"
              value={`${booking.selectedSeats.length} Ticket(s)`}
            />
          </div>

          {/* DIVIDER */}
          <div
            style={{
              borderTop:
                "2px dashed #ddd",
              margin: "30px 0",
            }}
          />

          {/* TOTAL */}
          <div
            style={{
              display: "flex",
              justifyContent:
                "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <p
                style={{
                  margin: 0,
                  color: "#888",
                  fontSize: "13px",
                }}
              >
                TOTAL AMOUNT
              </p>

              <h2
                style={{
                  margin: "5px 0",
                }}
              >
                ₹{booking.totalPrice}
              </h2>
            </div>

            <div
              style={{
                textAlign: "right",
              }}
            >
              <p
                style={{
                  margin: 0,
                  color: "#888",
                  fontSize: "13px",
                }}
              >
                BOOKING ID
              </p>

              <strong>{bookingId}</strong>
            </div>
          </div>

          {/* QR STYLE BOX */}
          <div
            style={{
              textAlign: "center",
              marginTop: "30px",
              padding: "20px",
              background: "#f7f7f7",
              borderRadius: "12px",
            }}
          >
            <div
              style={{
                fontSize: "65px",
                letterSpacing: "5px",
              }}
            >
              ▦
            </div>

            <p
              style={{
                margin: "8px 0 0",
                color: "#777",
              }}
            >
              Show this ticket at the entrance
            </p>
          </div>
        </div>
      </div>

      {/* BUTTONS */}
      <div
        style={{
          textAlign: "center",
          marginTop: "30px",
        }}
      >
        <button
          onClick={() => navigate("/")}
          style={{
            padding: "14px 30px",
            border: "none",
            borderRadius: "8px",
            background: "#e50914",
            color: "white",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Back to Home
        </button>
      </div>
    </div>
  );
}

function Info({ label, value }) {
  return (
    <div>
      <p
        style={{
          margin: "0 0 6px",
          fontSize: "12px",
          color: "#999",
          fontWeight: "bold",
        }}
      >
        {label}
      </p>

      <strong
        style={{
          fontSize: "15px",
        }}
      >
        {value}
      </strong>
    </div>
  );
}

export default BookingConfirmation;