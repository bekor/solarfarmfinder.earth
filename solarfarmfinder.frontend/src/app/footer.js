export default function Footer() {
  return (
    <footer className="bg-dark text-white py-4">
      <div className="container text-center">
        <p>
          &copy; {new Date().getFullYear()} Solar Farm Finder. All rights
          reserved.
        </p>
        <div className="mt-2">
          <a href="/about" className="text-light mx-3">
            About Us
          </a>
          <a href="/contact" className="text-light mx-3">
            Contact
          </a>
          <a
            className="nav-link disabled"
            className="text-light mx-3"
            href="https://github.com/bekor/solarfarmfinder.earth/tree/main"
            target="_blank"
          >
            Github
          </a>
        </div>
      </div>
    </footer>
  );
}
