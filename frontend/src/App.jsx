import { BrowserRouter, Routes, Route } from "react-router-dom";

// =========================
// HOME
// =========================
import Home from "./pages/Home";

// =========================
// MOVIE PAGES
// =========================
import Movies from "./pages/Movies";
import MovieDetails from "./pages/MovieDetails";
import TheatreSelection from "./pages/Theatreselection";
import SeatSelection from "./pages/seatselection";
import BookingConfirmation from "./pages/Bookingconfirmation";

// =========================
// EVENT PAGES
// =========================
import Events from "./pages/Events";
import EventBooking from "./pages/Eventbooking";
import EventConfirmation from "./pages/Eventconfirmation";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* ================= HOME ================= */}
        <Route
          path="/"
          element={<Home />}
        />

        {/* ================= MOVIES ================= */}

        <Route
          path="/movies"
          element={<Movies />}
        />

        <Route
          path="/movie/:id"
          element={<MovieDetails />}
        />

        <Route
          path="/movie/:id/theatres"
          element={<TheatreSelection />}
        />

        <Route
          path="/movie/:id/seats"
          element={<SeatSelection />}
        />

        <Route
          path="/movie/:id/confirmation"
          element={<BookingConfirmation />}
        />

        {/* ================= EVENTS ================= */}

        <Route
          path="/events"
          element={<Events />}
        />

        <Route
          path="/event-booking"
          element={<EventBooking />}
        />

        <Route
          path="/event-confirmation"
          element={<EventConfirmation />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
