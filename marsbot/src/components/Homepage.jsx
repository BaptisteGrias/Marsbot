import React from 'react';
import './homepage.css';
import { FaRobot } from 'react-icons/fa';
import Navbar from './Navbar';

export default function HomePage({ mars }) {
  return (
    <>
      <Navbar />
      <div className="Menu">
        <FaRobot className="robot" />
      </div>
      <div className="box">
        <h1 className="title">Welcome to MarsBot</h1>
      </div>
      <img className="bgMars" src={mars}></img>
    </>
  );
}
