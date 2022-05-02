import { Link } from "react-router-dom";
import "../App.css";
import {Navv} from './Styled'
import React from "react";

export const Navbar = () => {
  return (
    <Navv style={{ backgroundColor: "#8000ff", padding: 20,}}>
      {/* 
                all the links in navbar,
      IMPORTANT: Link should match as mentioned in problem statement 
      */}
      <Link to="/" className="lin">Home</Link>
      <Link to="/about" className="lin">About</Link>
      <Link to="/products" className="lin">Products</Link>
      <Link to="/products/men" className="lin">Men</Link>
      <Link to="/products/women" className="lin">Women</Link>
      <Link to="/products/kids" className="lin">Kids</Link>
      <Link to="/products/homedecor" className="lin">Home Decor</Link>
    </Navv>
  );
};
