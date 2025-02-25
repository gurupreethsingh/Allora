import React from "react";

const Header = () => {
  return (
    <div className = "flex justify-between items-center border-b">
      <ul className="nav">
  <li className="nav-item">
    <a className="nav-link text-dark font-semibold" href="#">LOGO</a>
  </li>

</ul>

<ul className="nav">
<li className="nav-item">
    <a className="nav-link text-dark font-semibold" href="#">Contact</a>
  </li>
  <li className="nav-item">
    <a className="nav-link text-dark font-semibold" href="#">About</a>
  </li>
</ul>

<ul className="nav">
  <li className="nav-item">
    <a className="nav-link text-dark font-semibold" href="#">name</a>
  </li>
  <li className="nav-item">
    <a className="nav-link text-dark font-semibold" href="/login">Login</a>
  </li>
  <li className="nav-item">
    <a className="nav-link text-dark font-semibold" href="/register">Register</a>
  </li>
  <li className="nav-item">
    <a className="nav-link text-dark font-semibold" href="/home">Logout</a>
  </li>
</ul>
    </div>
  );
};

export default Header;
