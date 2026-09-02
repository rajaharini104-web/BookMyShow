import { useNavigate } from "react-router-dom";

function Movies() {
  const navigate = useNavigate();

  const movies = [
    {
      id: "coolie",
      title: "Coolie",
      image:
        "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba",
      genre: "Action • Thriller",
      language: "Tamil",
      rating: "8.5",
    },
    {
      id: "war2",
      title: "War 2",
      image:
        "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429",
      genre: "Action • Adventure",
      language: "Hindi",
      rating: "8.2",
    },
    {
      id: "saiyaara",
      title: "Saiyaara",
      image:
        "https://images.unsplash.com/photo-1485846234645-a62644f84728",
      genre: "Romance • Drama",
      language: "Hindi",
      rating: "8.7",
    },
    {
      id: "superman",
      title: "Superman",
      image:
        "https://images.unsplash.com/photo-1518709594023-6eab9bab7b23",
      genre: "Action • Fantasy",
      language: "English",
      rating: "8.4",
    },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "40px 6%",
        background: "#f5f5f5",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1>Movies</h1>

      <p style={{ color: "#666" }}>
        Choose a movie to view details and book tickets.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "25px",
          marginTop: "30px",
        }}
      >
        {movies.map((movie) => (
          <div
            key={movie.id}
            onClick={() =>
              navigate(`/movie/${movie.id}`)
            }
            style={{
              background: "white",
              borderRadius: "15px",
              overflow: "hidden",
              cursor: "pointer",
              boxShadow:
                "0 5px 20px rgba(0,0,0,0.12)",
            }}
          >
            <img
              src={movie.image}
              alt={movie.title}
              style={{
                width: "100%",
                height: "300px",
                objectFit: "cover",
              }}
            />

            <div style={{ padding: "18px" }}>
              <h2 style={{ margin: "0 0 8px" }}>
                {movie.title}
              </h2>

              <p
                style={{
                  margin: "5px 0",
                  color: "#666",
                }}
              >
                {movie.genre}
              </p>

              <p
                style={{
                  margin: "5px 0",
                  color: "#666",
                }}
              >
                {movie.language}
              </p>

              <p
                style={{
                  marginTop: "12px",
                  fontWeight: "bold",
                }}
              >
                ⭐ {movie.rating}/10
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Movies;