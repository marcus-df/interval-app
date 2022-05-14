import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../State/store";
import { setMenuOpen } from "../State/appSlice";

function Menu() {

  const menuOpen: Boolean | any = useSelector((state: RootState) => state.appReducer.menuOpen);

  const dispatch = useDispatch();

  function handleToggleNav(toggleMenuValue: boolean) {
    dispatch(setMenuOpen(Boolean(toggleMenuValue)));
  }

  useEffect(() => {
    console.log(menuOpen);
  }, [menuOpen]);

  return (
    <dialog className="menu-field" open={menuOpen}>
      <div className="inner">
        <ul>
          <li>
            <Link onClick={() => handleToggleNav(false)} to="/">Set timer</Link>
          </li>
          <li>
            <Link onClick={() => handleToggleNav(false)} to="/timer-analog">Analog timer</Link>
          </li>
          <li>
            <Link onClick={() => handleToggleNav(false)} to="/timer-digital">Digital timer</Link>
          </li>
          <li>
            <Link onClick={() => handleToggleNav(false)} to="/timer-visual">Visual timer</Link>
          </li>
          <li>
            <Link onClick={() => handleToggleNav(false)} to="/timer-text">Text timer</Link>
          </li>
          <li>
            <Link onClick={() => handleToggleNav(false)} to="/timer-circles">Circles timer</Link>
          </li>
        </ul>
      </div>
    </dialog>
  );
}

export default Menu;
