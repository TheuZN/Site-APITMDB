import "./header.css";
import { Link } from "react-router-dom";
import React, { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [menuIcon, setMenuIcon] = useState("/img/menu.svg");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (isOpen) {
      setMenuIcon("/img/menu.svg");
    } else {
      setMenuIcon("/img/close.svg");
    }
  };

  const closeMenu = () => {
    setIsOpen(false);
    setMenuIcon("/img/menu.svg");
  };

  return (
    <header>
      <div className="wrapper">
        <div className="menu">
          <div className="header-logo">
            <Link to="/">
              <img src="/img/logo.svg" alt="Logo FlickPicks" />
              <span>FlickPicks</span>
            </Link>
          </div>

          <div className="mobile-menu">
            <button onClick={toggleMenu}>
              <img className="ico-menu" src={menuIcon} alt="Menu" />
            </button>
          </div>

          <div className="header-nav">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <a href="/#trending">Trending</a>
              </li>
              <li>
                <a href="/#toprated">Top Rated</a>
              </li>
              <li>
                <a href="/#now">Now Playing</a>
              </li>
            </ul>
          </div>
        </div>

        {isOpen && (
              <div className="mobile-nav open">
                <ul>
                  <li>
                    <Link to="/" onClick={closeMenu}>
                      Home
                    </Link>
                  </li>
                  <li>
                    <a href="/#trending" onClick={closeMenu}>
                      Trending
                    </a>
                  </li>
                  <li>
                    <a href="/#toprated" onClick={closeMenu}>
                      Top Rated
                    </a>
                  </li>
                  <li>
                    <a href="/#now" onClick={closeMenu}>
                      Now Playing
                    </a>
                  </li>
                </ul>
              </div>
        )}

      </div>
    </header>
  );
}



