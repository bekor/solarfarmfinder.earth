export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <div className="container">
        <a className="navbar-brand" href="#">
          Solar Farm Finder
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Team name
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                About this challenge
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                About us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" aria-disabled="true">
                Github
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
