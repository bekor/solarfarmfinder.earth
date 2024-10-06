// import logo from "solarfarmfinder.frontend/src/app/logo.png";
import Image from "next/image";
export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <div className="container">
        {/* <img src="/logo.png" width={50} height={50} alt="logo" /> */}
        <Image
          src="/logo.png"
          alt="logo of solar farm finder"
          width={70}
          height={65}
        />
        {/* <a className="navbar-brand" href="#">
          Solar Farm Finder
        </a> */}
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
              <a
                className="nav-link active"
                aria-current="page"
                href="https://www.deorc-ai.com/"
                target="_blank"
              >
                DEORC-AI
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://www.spaceappschallenge.org/nasa-space-apps-2024/"
                target="_blank"
              >
                About this challenge
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://www.spaceappschallenge.org/nasa-space-apps-2024/find-a-team/deorc-ai/?tab=members"
                target="_blank"
              >
                About us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
