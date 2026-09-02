import { useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

function SeatSelection() {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const bookingInfo = location.state || {};

  const [selectedSeats, setSelectedSeats] = useState([]);

  const rows = ["A", "B", "C", "D", "E", "F"];
  const seatsPerRow = 10;

  const bookedSeats = [
    "A3",
    "A4",
    "B7",
    "C2",
    "C3",
    "D8",
    "E5",
    "F1",
  ];

  const seatPrice = 200;

  const toggleSeat = (seat) => {
    if (bookedSeats.includes(seat)) {
      return;
    }

    if (selectedSeats.includes(seat)) {
      setSelectedSeats(
        selectedSeats.filter((item) => item !== seat)
      );
    } else {
      setSelectedSeats([
        ...selectedSeats,
        seat,
      ]);
    }
  };

  const totalPrice =
    selectedSeats.length * seatPrice;

  const proceedBooking = () => {
    if (selectedSeats.length === 0) {
      alert("Please select at least one seat.");
      return;
    }

    navigate(`/movie/${id}/confirmation`, {
      state: {
        theatre: bookingInfo.theatre,
        location: bookingInfo.location,
        time: bookingInfo.time,
        selectedSeats: selectedSeats,
        totalPrice: totalPrice,
      },
    });
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#111",
        color: "white",
        padding: "35px 5%",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* BACK */}
      <button
        onClick={() => navigate(-1)}
        style={{
          background: "#222",
          color: "white",
          border: "1px solid #444",
          padding: "10px 18px",
          borderRadius: "8px",
          cursor: "pointer",
          marginBottom: "25px",
        }}
      >
        ← Back
      </button>

      {/* HEADER */}
      <div style={{ textAlign: "center" }}>
        <h1>Select Your Seats</h1>

        <p style={{ color: "#bbb" }}>
          {bookingInfo.theatre || "Theatre"} •{" "}
          {bookingInfo.time || "Show Time"}
        </p>
      </div>

      {/* SCREEN */}
      <div
        style={{
          maxWidth: "600px",
          margin: "45px auto 30px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            height: "8px",
            background: "white",
            borderRadius: "50%",
            boxShadow: "0 0 20px rgba(255,255,255,0.8)",
          }}
        />

        <p
          style={{
            color: "#aaa",
            marginTop: "12px",
          }}
        >
          SCREEN THIS WAY
        </p>
      </div>

      {/* LEGEND */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "25px",
          marginBottom: "35px",
          flexWrap: "wrap",
        }}
      >
        <Legend
          type="available"
          text="Available"
        />

        <Legend
          type="selected"
          text="Selected"
        />

        <Legend
          type="booked"
          text="Booked"
        />
      </div>

      {/* SEATS */}
      <div
        style={{
          maxWidth: "650px",
          margin: "auto",
        }}
      >
        {rows.map((row) => (
          <div
            key={row}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "7px",
              marginBottom: "12px",
            }}
          >
            <span
              style={{
                width: "25px",
                fontWeight: "bold",
              }}
            >
              {row}
            </span>

            {Array.from(
              { length: seatsPerRow },
              (_, index) => {
                const seatNumber = index + 1;
                const seatId = `${row}${seatNumber}`;

                const isBooked =
                  bookedSeats.includes(seatId);

                const isSelected =
                  selectedSeats.includes(seatId);

                return (
                  <button
                    key={seatId}
                    disabled={isBooked}
                    onClick={() =>
                      toggleSeat(seatId)
                    }
                    style={{
                      width: "42px",
                      height: "36px",
                      borderRadius: "7px",
                      border: "none",
                      cursor: isBooked
                        ? "not-allowed"
                        : "pointer",
                      background: isBooked
                        ? "#555"
                        : isSelected
                        ? "#e50914"
                        : "#eee",
                      color: isBooked
                        ? "#aaa"
                        : isSelected
                        ? "white"
                        : "#222",
                      fontWeight: "bold",
                    }}
                  >
                    {seatNumber}
                  </button>
                );
              }
            )}
          </div>
        ))}
      </div>

      {/* SUMMARY */}
      <div
        style={{
          maxWidth: "750px",
          margin: "45px auto 0",
          background: "#1c1c1c",
          borderRadius: "15px",
          padding: "25px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        <div>
          <h3>Selected Seats</h3>

          <p style={{ color: "#ccc" }}>
            {selectedSeats.length > 0
              ? selectedSeats.join(", ")
              : "No seats selected"}
          </p>
        </div>

        <div>
          <h3>Total Amount</h3>

          <p
            style={{
              fontSize: "22px",
              fontWeight: "bold",
            }}
          >
            ₹{totalPrice}
          </p>
        </div>

        <button
          onClick={proceedBooking}
          style={{
            background: "#e50914",
            color: "white",
            border: "none",
            padding: "15px 25px",
            borderRadius: "8px",
            fontSize: "16px",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Proceed to Payment →
        </button>
      </div>
    </div>
  );
}

function Legend({ type, text }) {
  const background =
    type === "available"
      ? "#eee"
      : type === "selected"
      ? "#e50914"
      : "#555";

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "8px",
      }}
    >
      <span
        style={{
          width: "18px",
          height: "18px",
          display: "inline-block",
          borderRadius: "4px",
          background,
        }}
      />

      <span>{text}</span>
    </div>
  );
}

export default SeatSelection;