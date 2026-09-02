import { useNavigate, useParams } from "react-router-dom";

function TheatreSelection() {
  const navigate = useNavigate();
  const { id } = useParams();

  const theatres = [
    {
      name: "INOX: City Centre",
      location: "Dindigul",
      timings: ["10:00 AM", "1:30 PM", "5:00 PM", "9:30 PM"],
    },
    {
      name: "PVR Cinemas",
      location: "Dindigul",
      timings: ["10:30 AM", "2:00 PM", "6:00 PM", "10:00 PM"],
    },
    {
      name: "Sakthi Cinemas",
      location: "Dindigul",
      timings: ["11:00 AM", "3:00 PM", "7:00 PM", "10:30 PM"],
    },
  ];

  const selectShow = (theatre, time) => {
    navigate(`/movie/${id}/seats`, {
      state: {
        theatre: theatre.name,
        location: theatre.location,
        time: time,
      },
    });
  };

  return (
    <div className="theatre-page">

      <button
        onClick={() => navigate(-1)}
        style={{
          padding: "10px 18px",
          margin: "20px",
          cursor: "pointer",
        }}
      >
        ← Back
      </button>

      <div className="theatre-header">
        <h1>Select Theatre</h1>
        <p>Choose your preferred theatre and show time</p>
      </div>

      <div className="theatre-list">

        {theatres.map((theatre, index) => (
          <div className="theatre-card" key={index}>

            <div>
              <h2>{theatre.name}</h2>

              <p>
                📍 {theatre.location}
              </p>
            </div>

            <div className="show-times">

              {theatre.timings.map((time) => (
                <button
                  key={time}
                  onClick={() =>
                    selectShow(theatre, time)
                  }
                >
                  {time}
                </button>
              ))}

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}

export default TheatreSelection;