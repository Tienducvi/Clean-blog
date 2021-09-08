import React from 'react';
import { NavLink } from 'react-router-dom';

export default function NavBar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light" id="mainNav">
        <div className="container px-4 px-lg-5">
          <NavLink className="navbar-brand" to="/">Start Bootstrap</NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            Menu
            <i className="fas fa-bars" />
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ms-auto py-4 py-lg-0">
              <li className="nav-item"><NavLink className="nav-link px-lg-3 py-3 py-lg-4" to="/">Home</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link px-lg-3 py-3 py-lg-4" to="/about">About</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link px-lg-3 py-3 py-lg-4" to="/contact">Contact</NavLink></li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

// function for NavBar
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
  const nav = document.getElementById('mainNav');
  const header = document.querySelector('.masthead');
  const st = window.pageYOffset || document.documentElement.scrollTop;
  if (st > lastScrollTop || header.getBoundingClientRect().top === 0) {
    nav.classList.remove('is-fixed');
    nav.classList.remove('is-visible');
  } else {
    nav.classList.add('is-fixed');
    nav.classList.add('is-visible');
  }
  lastScrollTop = st <= 0 ? 0 : st;
}, false);
