import React from 'react';
import GeneraleBanner from '../contain/GeneraleBanner';

const Langues = () => {
    return (
        <div className="contain-content-inform">
            <div className="inform-part2">
                <div className="container-st">
                    <h2> métrises des langues </h2>
                    <ul className="fa-ul">
                        <li><span className="fa-li"><i className="fas fa-language"></i></span>Français (tés Biens/ couramment)</li>
                        <li><span className="fa-li"><i className="fas fa-language"></i></span>Arabes (trés Biens / maternelles)</li>
                        <li><span className="fa-li"><i className="fas fa-language"></i></span>in lists (Biens / intermédiare)</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Langues;