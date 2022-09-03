import React,{useState,useEffect} from "react";
import logo from "../../assets/synergy-logo.png";
import { Link } from "react-router-dom";

export const Search = () => {
  

  window.addEventListener("scroll", function () {
    const search = document.querySelector(".search");
    search.classList.toggle("active", window.scrollY > 100);
  });
  return (
    <>
      <div className="search">
        <div className="container c_flex">
          <div className="logo">
           <Link to="/"><img src={logo} alt="" /></Link> 
          </div>
        
        </div>
      </div>
    </>
  );
};
