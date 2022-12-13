import React from "react";

function Nav() {
  const primary_nav = useRef();
  const nav_toggle = useRef();

  /* 
     toggle switch for nav bar 
 
   */
  const navToggle = function (e) {
    const visibility = primary_nav.current.getAttribute("data-visible");
    if (visibility === "false") {
      primary_nav.current.setAttribute("data-visible", true);
      e.target.setAttribute("aria-expanded", true);
    } else if (visibility === "true") {
      primary_nav.current.setAttribute("data-visible", false);
      e.target.setAttribute("aria-expanded", false);
    }
  };

  return (
    <nav>
      <div className="nav-con">
        <div className="nav-brand">
          <h1>Cat Wappy</h1>
        </div>

        <button
          ref={nav_toggle}
          aria-controls="primary-nav"
          aria-expanded={false}
          className="mobile-nav-toggle"
          onClick={navToggle}
        >
          <span></span>
        </button>
        <ul
          ref={primary_nav}
          id="primary-nav"
          data-visible={false}
          className="primary-nav flex .primary-nev"
        >
          <li className="active">
            <Link to={"/"} className="primary-nav-link">
              <span aria-hidden={true}>01</span>
              Home
            </Link>
          </li>
          <li className="active">
            <Link to={"/cat"} className="primary-nav-link">
              <span aria-hidden={true}>02</span>
              manyCat
            </Link>
          </li>
          <li className="active">
            <Link to={"/"} className="primary-nav-link">
              <span aria-hidden={true}>03</span>
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
