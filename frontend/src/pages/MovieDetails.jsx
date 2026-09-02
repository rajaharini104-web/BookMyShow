import { useNavigate, useParams } from "react-router-dom";

function MovieDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Movie data
  const movies = [
    {
      id: "coolie",
      title: "Coolie",
      image:
        "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba",
      genre: "Action / Thriller",
      language: "Tamil",
      duration: "2h 45m",
      rating: "8.5/10",
      certificate: "UA",
      description:
        "An action-packed story filled with powerful characters, thrilling moments, intense action sequences and unforgettable entertainment.",
    },

    {
      id: "war2",
      title: "War 2",
      image:
        "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429",
      genre: "Action / Adventure",
      language: "Hindi",
      duration: "2h 30m",
      rating: "8.2/10",
      certificate: "UA",
      description:
        "A thrilling action adventure filled with suspense, powerful missions, breathtaking moments and high-energy action.",
    },

    {
      id: "saiyaara",
      title: "Saiyaara",
      image:
        "https://images.unsplash.com/photo-1485846234645-a62644f84728",
      genre: "Romance / Drama",
      language: "Hindi",
      duration: "2h 20m",
      rating: "8.7/10",
      certificate: "UA",
      description:
        "A beautiful romantic drama about love, dreams, relationships and the emotional journey of two people.",
    },

    {
      id: "superman",
      title: "Superman",
      image:
        "https://images.unsplash.com/photo-1518709594023-6eab9bab7b23",
      genre: "Action / Fantasy",
      language: "English",
      duration: "2h 10m",
      rating: "8.4/10",
      certificate: "UA",
      description:
        "An exciting superhero adventure filled with action, courage, extraordinary powers and a fight to protect humanity.",
    },
  ];

  // Find selected movie
  const movie = movies.find((item) => item.id === id);

  // If movie doesn't exist
  if (!movie) {
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
        <div
          style={{
            textAlign: "center",
            background: "white",
            padding: "40px",
            borderRadius: "15px",
            boxShadow: "0 5px 20px rgba(0,0,0,0.1)",
          }}
        >
          <h1>Movie Not Found</h1>

          <p>
            Sorry, we couldn't find the movie you selected.
          </p>

          <button
            onClick={() => navigate("/")}
            style={{
              marginTop: "15px",
              padding: "12px 25px",
              border: "none",
              borderRadius: "8px",
              background: "#e50914",
              color: "white",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            ← Back to Home
          </button>
        </div>
      </div>
    );
  }

  // Go to theatre selection
  const handleBooking = () => {
    navigate(`/movie/${id}/theatres`);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#111",
        color: "white",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* TOP NAVIGATION */}
      <div
        style={{
          height: "70px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 6%",
          background: "#000",
          borderBottom: "1px solid #333",
        }}
      >
        <h2
          style={{
            margin: 0,
            cursor: "pointer",
          }}
          onClick={() => navigate("/")}
        >
          🎬 MovieBook
        </h2>

        <button
          onClick={() => navigate("/")}
          style={{
            background: "transparent",
            border: "1px solid #555",
            color: "white",
            padding: "10px 18px",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          ← Home
        </button>
      </div>

      {/* MOVIE DETAILS */}
      <div
        style={{
          maxWidth: "1200px",
          margin: "auto",
          padding: "60px 6%",
          display: "flex",
          gap: "50px",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        {/* MOVIE POSTER */}
        <div
          style={{
            flex: "0 0 320px",
          }}
        >
          <img
            src={movie.image}
            alt={movie.title}
            style={{
              width: "100%",
              height: "470px",
              objectFit: "cover",
              borderRadius: "18px",
              boxShadow:
                "0 20px 50px rgba(0,0,0,0.6)",
            }}
          />
        </div>

        {/* MOVIE INFORMATION */}
        <div
          style={{
            flex: "1",
            minWidth: "300px",
          }}
        >
          <p
            style={{
              color: "#aaa",
              fontSize: "14px",
              letterSpacing: "2px",
              textTransform: "uppercase",
            }}
          >
            Movie Details
          </p>

          <h1
            style={{
              fontSize: "52px",
              margin: "10px 0 15px",
            }}
          >
            {movie.title}
          </h1>

          {/* RATING */}
          <div
            style={{
              display: "inline-block",
              background: "#222",
              padding: "10px 15px",
              borderRadius: "8px",
              marginBottom: "25px",
            }}
          >
            ⭐ <strong>{movie.rating}</strong>
          </div>

          {/* DESCRIPTION */}
          <p
            style={{
              color: "#ccc",
              lineHeight: "1.8",
              fontSize: "17px",
              maxWidth: "700px",
            }}
          >
            {movie.description}
          </p>

          {/* MOVIE DETAILS */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "12px",
              margin: "25px 0",
            }}
          >
            <span style={tagStyle}>
              🎭 {movie.genre}
            </span>

            <span style={tagStyle}>
              🌐 {movie.language}
            </span>

            <span style={tagStyle}>
              ⏱️ {movie.duration}
            </span>

            <span style={tagStyle}>
              🎞️ {movie.certificate}
            </span>
          </div>

          {/* BOOK BUTTON */}
          <button
            onClick={handleBooking}
            style={{
              background: "#e50914",
              color: "white",
              border: "none",
              padding: "16px 35px",
              borderRadius: "10px",
              fontSize: "17px",
              fontWeight: "bold",
              cursor: "pointer",
              boxShadow:
                "0 8px 25px rgba(229,9,20,0.3)",
            }}
          >
            🎟️ Book Tickets
          </button>
        </div>
      </div>

      {/* FOOTER */}
      <div
        style={{
          borderTop: "1px solid #333",
          padding: "25px",
          textAlign: "center",
          color: "#777",
        }}
      >
        <p>
          © 2026 MovieBook • Book your movie experience
        </p>
      </div>
    </div>
  );
}

const tagStyle = {
  background: "#222",
  color: "#ddd",
  padding: "10px 14px",
  borderRadius: "8px",
  fontSize: "14px",
};

export default MovieDetails;