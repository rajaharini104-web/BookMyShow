function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="logo">book<span>my</span>show</div>

        <input
          className="search-box"
          type="text"
          placeholder="Search for Movies, Events, Plays, Sports and Activities"
        />

        <div className="nav-right">
          <span className="location">📍 Dindigul</span>
          <button className="signin-btn">Sign in</button>
          <span className="menu">☰</span>
        </div>
      </nav>

      <div className="category-bar">
        <div className="categories-left">
          <span>Movies</span>
          <span>Stream</span>
          <span>Events</span>
          <span>Plays</span>
          <span>Sports</span>
          <span>Activities</span>
        </div>

        <div className="categories-right">
          <span>ListYourShow</span>
          <span>Corporates</span>
          <span>Offers</span>
          <span>Gift Cards</span>
        </div>
      </div>
    </>
  );
}

export default Navbar;