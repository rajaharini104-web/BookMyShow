import MovieCard from "../components/Moviecard";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  // Movies Data
  const movies = [
    {
      id: "coolie",
      title: "Coolie",
      image:
        "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=600&q=90",
      genre: "Action / Thriller",
      language: "Tamil",
    },
    {
      id: "war2",
      title: "War 2",
      image:
        "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=600&q=90",
      genre: "Action / Adventure",
      language: "Hindi",
    },
    {
      id: "saiyaara",
      title: "Saiyaara",
      image:
        "https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=600&q=90",
      genre: "Romance / Drama",
      language: "Hindi",
    },
    {
      id: "superman",
      title: "Superman",
      image:
        "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=600&q=90",
      genre: "Action / Fantasy",
      language: "English",
    },
  ];

  // Events Data
  const events = [
    {
      title: "Music Concert",
      image:
        "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=800&q=90",
    },
    {
      title: "Comedy Show",
      image:
        "https://images.unsplash.com/photo-1527224857830-43a7acc85260?auto=format&fit=crop&w=800&q=90",
    },
    {
      title: "Live Theatre",
      image:
        "https://images.unsplash.com/photo-1503095396549-807759245b35?auto=format&fit=crop&w=800&q=90",
    },
    {
      title: "Sports Event",
      image:
        "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=800&q=90",
    },
  ];

  return (
    <div>
      {/* CINEMATIC HERO SECTION */}
      <section className="hero">
        {/* Floating Particles */}
        <div className="floating-particles">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className="hero-overlay">
          <div className="hero-content">
            <p className="hero-tag">✦ NOW SHOWING ✦</p>

            <h1>
              Experience Entertainment
              <br />
              Like Never Before
            </h1>

            <p>
              Discover movies, live events, sports, plays and unforgettable
              experiences near you.
            </p>

            <button onClick={() => navigate("/events")}>
              Explore Now
            </button>
          </div>
        </div>
      </section>

      <main className="home">
        {/* TRENDING MOVIES SECTION */}
        <section className="section">
          <div className="section-heading">
            <div>
              <p className="small-title">WHAT'S HOT 🔥</p>
              <h2>Trending Movies</h2>
            </div>

            <span>See All ›</span>
          </div>

          {/* AUTO MOVING MOVIE CAROUSEL */}
          <div className="carousel-wrapper">
            <div className="movie-carousel">
              {[...movies, ...movies].map((movie, index) => (
                <MovieCard
                  key={`${movie.id}-${index}`}
                  id={movie.id}
                  title={movie.title}
                  image={movie.image}
                  genre={movie.genre}
                  language={movie.language}
                />
              ))}
            </div>
          </div>
        </section>

        {/* PREMIUM ENTERTAINMENT BANNER */}
        <section className="entertainment-banner premium-banner">
          <div>
            <p className="small-title">UNLIMITED ENTERTAINMENT</p>

            <h2>YOUR NEXT EXPERIENCE STARTS HERE ✨</h2>

            <p>Movies. Music. Sports. Comedy. Theatre.</p>
          </div>

          <button onClick={() => navigate("/events")}>
            Explore Events →
          </button>
        </section>

        {/* LIVE EVENTS SECTION */}
        <section className="section">
          <div className="section-heading">
            <div>
              <p className="small-title">DON'T MISS OUT 🎉</p>

              <h2>The Best Of Live Events</h2>
            </div>

            <span onClick={() => navigate("/events")} className="see-all">
              See All ›
            </span>
          </div>

          <div className="event-container">
            {events.map((event, index) => (
              <div className="event-card animated-event" key={index}>
                <div className="event-image">
                  <img src={event.image} alt={event.title} />
                </div>

                <h3>{event.title}</h3>

                <p>Book your tickets now</p>

                <button
                  className="event-btn"
                  onClick={() => navigate("/events")}
                >
                  Explore →
                </button>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer>
        <div className="footer-content">
          <h2>BookMyShow</h2>

          <p>
            Discover the latest movies, events, sports and entertainment near
            you.
          </p>

          <div className="footer-links">
            <span>About Us</span>
            <span>Contact Us</span>
            <span>Terms & Conditions</span>
            <span>Privacy Policy</span>
          </div>

          <p className="copyright">
            © 2026 BookMyShow Clone. Made with ❤️ using React.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Home;