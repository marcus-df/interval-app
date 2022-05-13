import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Navicon from "../Assets/navicon.svg";

function Navigation() {
  const dispatch = useDispatch();
  const [toggle, setToggle] = useState(false);

  function toggleNav() {
    setToggle(!toggle);
  }

  useEffect(() => {
    console.log(toggle);
  }, [toggle]);

  return (
    <div className="nav-container">
      <section id="main-nav">
        <div id="navicon" onClick={() => toggleNav()}>
          <img src={Navicon} alt="navigation icon" />
        </div>
      </section>
      {toggle ? <p>toggle == true</p> : <p>toggle == false</p>}
    </div>
  );
}

export default Navigation;
