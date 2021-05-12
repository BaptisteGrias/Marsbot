import React, { useState, useEffect } from 'react';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li className="items">HomePage 🌍 </li>
        <li className="items">tchat 🤖 </li>
        <li className="items">Galerie 📸 </li>
      </ul>
    </nav>
  );
}
