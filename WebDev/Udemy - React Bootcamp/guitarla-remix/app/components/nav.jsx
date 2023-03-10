import { Link, useLocation } from "@remix-run/react";

function Nav() {

    const location = useLocation()

  return (
    <nav className="nav">
      <Link to="/" className={location.pathname === "/" ? "active" : ""}>
        Home
      </Link>
      <Link
        to="/about"
        className={location.pathname === "/about" ? "active" : ""}
      >
        About
      </Link>
      <Link
        to="/shop"
        className={location.pathname === "/shop" ? "active" : ""}
      >
        Shop
      </Link>
      <Link
        to="/blog"
        className={location.pathname === "/blog" ? "active" : ""}
      >
        Blog
      </Link>
    </nav>
  );
}

export default Nav;
