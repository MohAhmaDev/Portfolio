import React, { useContext } from 'react';
import './tools.css';
import { ThemeContext } from '../../context';

import Img1 from '../../img/service1.png'
import Img2 from '../../img/service2.png'
import Img3 from '../../img/service3.png'
import Img4 from '../../img/service4.png'
import Img5 from '../../img/service5.png'
import Img6 from '../../img/service6.png'



const Tools = ({ id }) => {

    const { isDarkMode } = useContext(ThemeContext);


    return (
        <div className={`container-S1 ${isDarkMode ? 'dark' : ''}`} id={id}>
			<div className="card-S1">
				<div className="imgBx-S1">
					<img src={Img1}/>
				</div>
				<div className="content-S1">
					<div>
						<h3>Web Design</h3>
					</div>
				</div>
			</div>
			<div className="card-S1">
				<div className="imgBx-S1">
                    <img src={Img2}/>
				</div>
				<div className="content-S1">
					<div>
						<h3>Web developement</h3>
					</div>
				</div>
			</div>
			<div className="card-S1">
				<div className="imgBx-S1">
                   <img src={Img3}/>
				</div>
				<div className="content-S1">
					<div>
						<h3>Graphic Design</h3>
					</div>
				</div>
			</div>
			<div className="card-S1">
				<div className="imgBx-S1">
                    <img src={Img4}/>
				</div>
				<div className="content-S1">
					<div>
						<h3>Data Analytics</h3>
					</div>
				</div>
			</div>
			<div className="card-S1">
				<div className="imgBx-S1">
                    <img src={Img5}/>
				</div>
				<div className="content-S1">
					<div>
						<h3>Mobile App</h3>
					</div>
				</div>
			</div>
			<div className="card-S1">
				<div className="imgBx-S1">
                    <img src={Img6}/>
				</div>
				<div className="content-S1">
					<div>
						<h3>Responsive Design</h3>
					</div>
				</div>
			</div>
		</div>
    );
};

export default Tools;