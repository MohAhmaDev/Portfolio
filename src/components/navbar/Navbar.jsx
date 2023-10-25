import React, { useEffect, useState } from 'react';
import './navbar.css';

const Navbar = () => {

    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        // Code pour la barre d'en-tête "sticky"
        const handleScroll = () => {
          setIsSticky(window.scrollY > 0);
        };
    
        window.addEventListener("scroll", handleScroll);
    
        // Code pour la navigation à une section
        const links = document.querySelectorAll(".navbar_header a");
    
        links.forEach(link => {
          link.addEventListener("click", scrollToSection);
        });
    
        function scrollToSection(e) {
          e.preventDefault();
    
          const targetId = this.getAttribute("href").substring(1);
          const targetSection = document.getElementById(targetId);
    
          window.scrollTo({
            top: targetSection.offsetTop,
            behavior: "smooth"
          });
    
          // Mettez en surbrillance l'élément du menu actif
          links.forEach(link => link.classList.remove("active"));
          this.classList.add("active");
        }
    
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, []);
  


    return (
        <header className={`navbar_header ${isSticky ? "sticky" : ""}`}>
          <a href="#section1" className="logo">Welcome !</a>
          <ul>
              <li><a href="#section2">Info</a></li>
              <li><a href="#section3">Project</a></li>
              <li><a href="#section4">Plus</a></li>
              <li><a href="#section5">Service</a></li>
              <li><a href="#section6">Contact</a></li>
          </ul>
        </header>
    );
};

export default Navbar;