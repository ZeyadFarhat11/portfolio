import {
  faCodeFork,
  faHome,
  faLaptopCode,
  faNewspaper,
  faStar,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./header.scss";
import { useEffect, useState } from "react";
import data from "../../data.jsx";
import { useLocation } from "react-router-dom";
import logo from "../../assets/img/logo.svg";

function Header() {
  const [menuActive, setMenuActive] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setMenuActive(false);
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="header">
      <Container>
        <Link className="logo">
          <img src={logo} alt="logo" />
        </Link>
        <div className={`menu ${menuActive ? "active" : ""}`}>
          <nav>
            <Link to="/">
              <FontAwesomeIcon icon={faHome} />
              <span>Home</span>
            </Link>
            <Link to="/about">
              <FontAwesomeIcon icon={faUser} />
              <span>About</span>
            </Link>
            <Link to="/projects">
              <FontAwesomeIcon icon={faLaptopCode} />
              <span>Projects</span>
            </Link>
            <Link to="/resume">
              <FontAwesomeIcon icon={faNewspaper} />
              <span>Resume</span>
            </Link>
          </nav>
          <a href={data.repoUrl} target="_blank" className="repo-button">
            <FontAwesomeIcon icon={faCodeFork} />
            <FontAwesomeIcon icon={faStar} />
          </a>
        </div>
        <button
          className={`menu-btn ${menuActive ? "active" : ""}`}
          onClick={() => setMenuActive((p) => !p)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </Container>
    </div>
  );
}

export default Header;