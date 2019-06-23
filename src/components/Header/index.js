import React from "react";
import "./styles.scss";
import { Link } from "react-router-dom";

const Header = props => {
  return (
    <div className="header__container">
      <div className="header__wrapper">
        <div className="header__title">
          <h1 className="header__logo-title">
            {" "}
            <i className="fas fa-dog"> </i> Adopt a doggo{" "}
          </h1>
        </div>
        <div className="header__menu">
          <nav>
            <ul className="menu__list">
              <li className="menu__link">
                <Link className="link__header" to={`/`}>
                  Search
                </Link>
              </li>
              <li className="menu__link">
                <Link className="link__header" to={`/adddog`}>
                  Add
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
