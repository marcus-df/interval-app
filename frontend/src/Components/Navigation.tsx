import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../State/store";
import { setMenuOpen } from "../State/appSlice";
import NavIcon from "./NavIcon";

function Navigation() {
  const menuOpen = useSelector((state: RootState) => state.appReducer.menuOpen);
  const dispatch = useDispatch();

  function handleToggleNav(toggleMenuValue: boolean) {
    dispatch(setMenuOpen(Boolean(toggleMenuValue)));
  }

  return (
    <section id="main-nav">
      <div id="navicon" onClick={() => handleToggleNav(!menuOpen)} className={menuOpen ? "bright" : "dark"}>
        <NavIcon />
      </div>
    </section>
  );
}

export default Navigation;
