import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Events() {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState("All");

  const events = [
    {
      id: 1,
      title: "Echoes Music Festival",
      category: "Music",
      icon: "🎵",
      date: "15 September 2026",
      day: "15",
      month: "SEP",
      time: "7:00 PM",
      location: "Chennai",
      venue: "Phoenix Arena",
      price: 999,
      image:
        "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1200&q=80",
      description:
        "Experience an unforgettable night filled with powerful performances, stunning lights, incredible music and an energetic crowd.",
    },

    {
      id: 2,
      title: "Laugh Out Loud",
      category: "Comedy",
      icon: "🎤",
      date: "20 September 2026",
      day: "20",
      month: "SEP",
      time: "8:00 PM",
      location: "Coimbatore",
      venue: "City Convention Hall",
      price: 599,
      image:
        "https://images.unsplash.com/photo-1527224857830-43a7acc85260?auto=format&fit=crop&w=1200&q=80",
      description:
        "An evening packed with hilarious stories, unexpected jokes and some of the most exciting stand-up comedians.",
    },

    {
      id: 3,
      title: "Neon Night Party",
      category: "Nightlife",
      icon: "✨",
      date: "27 September 2026",
      day: "27",
      month: "SEP",
      time: "9:00 PM",
      location: "Bangalore",
      venue: "Sky Lounge",
      price: 1299,
      image:
        "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80",
      description:
        "Dance under neon lights with live DJs, immersive visuals and an unforgettable nightlife experience.",
    },

    {
      id: 4,
      title: "Art & Culture Expo",
      category: "Exhibition",
      icon: "🎨",
      date: "05 October 2026",
      day: "05",
      month: "OCT",
      time: "10:00 AM",
      location: "Chennai",
      venue: "Art District",
      price: 399,
      image:
        "https://images.unsplash.com/photo-1561214115-f2f134cc4912?auto=format&fit=crop&w=1200&q=80",
      description:
        "Discover creativity, culture, installations and artwork from talented artists around the country.",
    },

    {
      id: 5,
      title: "Startup Summit 2026",
      category: "Business",
      icon: "🚀",
      date: "12 October 2026",
      day: "12",
      month: "OCT",
      time: "9:30 AM",
      location: "Bangalore",
      venue: "Tech Park Auditorium",
      price: 799,
      image:
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80",
      description:
        "Meet innovators, entrepreneurs and industry leaders shaping the future of technology and business.",
    },

    {
      id: 6,
      title: "Theatre Under Stars",
      category: "Theatre",
      icon: "🎭",
      date: "18 October 2026",
      day: "18",
      month: "OCT",
      time: "6:30 PM",
      location: "Madurai",
      venue: "Open Air Theatre",
      price: 499,
      image:
        "https://images.unsplash.com/photo-1503095396549-807759245b35?auto=format&fit=crop&w=1200&q=80",
      description:
        "A beautiful open-air theatre experience featuring powerful performances and captivating storytelling.",
    },
  ];

  const categories = [
    "All",
    "Music",
    "Comedy",
    "Nightlife",
    "Exhibition",
    "Business",
    "Theatre",
  ];

  const filteredEvents =
    activeCategory === "All"
      ? events
      : events.filter(
          (event) => event.category === activeCategory
        );

  const handleExplore = (event) => {
    navigate("/event-booking", {
      state: { event },
    });
  };

  return (
    <div className="events-page">

      <section className="events-hero">
        <div className="events-hero-content">
          <p className="events-eyebrow">
            DISCOVER SOMETHING AMAZING ✦
          </p>

          <h1>
            Live experiences.
            <br />
            <span>Real memories.</span>
          </h1>

          <p className="events-hero-description">
            Discover concerts, comedy shows, cultural experiences,
            parties and unforgettable events happening near you.
          </p>
        </div>
      </section>


      <section className="events-main-section">

        <div className="events-section-heading">
          <div>
            <p>DON'T MISS OUT</p>
            <h2>The Best of Live Events</h2>
          </div>
        </div>


        <div className="event-category-filter">
          {categories.map((category) => (
            <button
              key={category}
              className={
                activeCategory === category
                  ? "active-category"
                  : ""
              }
              onClick={() =>
                setActiveCategory(category)
              }
            >
              {category}
            </button>
          ))}
        </div>


        <div className="professional-events-grid">

          {filteredEvents.map((event) => (

            <article
              className="professional-event-card"
              key={event.id}
            >

              <div className="professional-event-image">

                <img
                  src={event.image}
                  alt={event.title}
                />

                <div className="event-image-gradient"></div>

                <div className="event-category-badge">
                  {event.icon} {event.category}
                </div>

                <div className="event-date-badge">
                  <strong>{event.day}</strong>
                  <span>{event.month}</span>
                </div>

                <button
                  className="image-book-button"
                  onClick={() =>
                    handleExplore(event)
                  }
                >
                  Book Now →
                </button>

              </div>


              <div className="professional-event-content">

                <div className="event-location-row">
                  📍 {event.location}
                </div>

                <h3>{event.title}</h3>

                <div className="event-information">
                  <span>🕒 {event.time}</span>
                  <span>
                    ₹{event.price.toLocaleString("en-IN")}
                  </span>
                </div>

                <div className="event-card-footer">

                  <span>{event.venue}</span>

                  <button
                    onClick={() =>
                      handleExplore(event)
                    }
                  >
                    Explore →
                  </button>

                </div>

              </div>

            </article>

          ))}

        </div>

      </section>

    </div>
  );
}

export default Events;