import { Link } from "@remix-run/react";
import Logo from "../../public/img/logo.svg";
import Nav from "./nav";

function Header() {
  return (
    <header className="header">
      <div className="container bar">
        <Link to="/">
          <img className="logo" src={Logo} alt="Icon" />
        </Link>
        <Nav />
      </div>
    </header>
  );
}

export default Header;
