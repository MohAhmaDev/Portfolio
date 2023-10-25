import "./about.css";
import Award from "../../img/design.jpg";
import { useContext } from "react";
import { ThemeContext } from "../../context";

const About = ({ id }) => {

  const { isDarkMode } = useContext(ThemeContext);

  return (
    <div className={`a ${isDarkMode ? 'dark' : ''}`} id={id}>
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src="https://images.pexels.com/photos/4930043/pexels-photo-4930043.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          It is a long established fact that a reader will be distracted by the
          readable content.
        </p>
        <p className="a-desc">
          Je me présente Mohamed AHMANACHE développer web full stack et Ingénier BigData Mon parcours plutôt 
          atypique démontre mon engagement constant dans le développement de mes compétences et de ma carrière Après avoir 
          obtenu mon baccalauréat scientifique mention bien j'ai choisi de poursuivre mes études à l'université 
          dans un domaine qui me passionne l’informatique donc j’ai fait une licence professionnelle développement web et infographie et poursuivie en obtenant 
          un master en BigData afin d’élargir ma palette de compétence et de connaissance dans un domaine plus technique; .
        </p>
        <div className="a-award">
          <img src={Award} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">International Design Awards 2021</h4>
            <p className="a-award-desc">
             Découvrez dès maintenant mon portfolio “photographie de portraits” via les images ci-dessous.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
