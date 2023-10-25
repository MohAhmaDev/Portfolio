import React from 'react';
import GeneraleBanner from '../contain/GeneraleBanner';

const Home = () => {
    return (
        <div className="contain-content-inform">
            <div className="inform-part1"> 
                <h2> Resume </h2>
            </div>
            <div className="inform-part2">
                <div className="new-card">
                    <div className="content">
                        <p> <b> prénom </b> <span> : Mohamed  </span></p>
                        <p> <b> nom </b> <span> : Ahmanache  </span></p>
                        <p> <b> date de naissance </b> <span> : 25/10/1999 </span></p>
                        <p> <b> lieu de naissance </b> <span> : Koba </span></p>
                        <p> <b> tel </b> <span> : 0541579255 </span> </p>
                        <p className="underline"> <b> Adress </b> <span> : Boumerdess </span> </p>

                        <br />
                        <b> A propos de moi : </b>
                        <p> Jeune entrepreneur motivé et fraichement licencier (licence 
                            proféssionnelle dévéloppement web et infographie) 
                            entrepreneur libre (développeur et infographe).
                        </p>
                
                    </div>
                
                    <img src={`../../mohamed.jpg`} id="img" />
                </div>
            </div>
        </div>
    );
};

export default Home;