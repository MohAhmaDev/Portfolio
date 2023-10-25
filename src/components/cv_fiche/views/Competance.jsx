import React from 'react';
import GeneraleBanner from '../contain/GeneraleBanner';


const Competance = () => {
    return (
        <div className="contain-content-inform">
            <div className="inform-part2">
                <div className="container-st">
                    <h2> List de mes compétences </h2>
                    <ul className="fa-ul">
                        <li><span className="fa-li"><i className="fas fa-fill-drip"></i></span> crée applictaion et site web </li>
                        <li><span className="fa-li"><i className="fas fa-fill-drip"></i></span> compétance en matématique et en analyse de données </li>
                        <li><span className="fa-li"><i className="fas fa-fill-drip"></i></span> getsion de base de données et Bi </li>
                        <li><span className="fa-li"><i className="fas fa-fill-drip"></i></span> creation application mobile </li>
                        <li><span className="fa-li"><i className="fas fa-fill-drip"></i></span> web designe et infogarphie </li>
                        <li><span className="fa-li"><i className="fas fa-fill-drip"></i></span> data mining et data science </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Competance;