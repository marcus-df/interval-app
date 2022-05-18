import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../State/store";
import { setMenuOpen } from "../State/appSlice";
import NavIcon from "./NavIcon";
import { useLocation } from "react-router-dom";

function Navigation() {
  const menuOpen = useSelector((state: RootState) => state.appReducer.menuOpen);
  const dispatch = useDispatch();
  const location = useLocation();
  let pagepath = location.pathname;

  function handleToggleNav(toggleMenuValue: boolean) {
    dispatch(setMenuOpen(Boolean(toggleMenuValue)));
  }

  return (
    <section id="main-nav">
      <div
        id="navicon"
        onClick={() => handleToggleNav(!menuOpen)}
        className={menuOpen || pagepath == "/timer-visual" ? "bright" : "dark"}
      >
        <NavIcon />
      </div>
    </section>
  );
}

export default Navigation;
