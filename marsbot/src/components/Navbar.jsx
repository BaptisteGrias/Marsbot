import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav>
      <ul>
        <Link to="/">
          <li className="items">HomePage 🌍 </li>
        </Link>

        <Link to="ChatBot">
          <li className="items">tchat with us 🤖 </li>
        </Link>

        <Link to="PicturesList">
          <li className="items">Galerie 📸 </li>
        </Link>
      </ul>
    </nav>
  );
}
