import React, { useContext, useState, useEffect } from 'react';
import { ThemeContext } from '../../../context';

const GeneraleBanner = ({ children }) => {

   const { isDarkMode, page, setPage } = useContext(ThemeContext);

    return (
        <div className='banner'>
            <div className={`contain-Pro ${isDarkMode ? 'dark' : ''}`}>
                <div className="contain-content">
                    <div className="contain-menu-bar">
                        <ul className="sciL">
                            <li id={`${page === 1 ? "rubrique" : ""}`}>
                                <a onClick={() => setPage(1)}>
                                    <span className="menu-sp">
                                        Résume
                                    </span>
                                </a>  
                            </li>
                            <li id={`${page === 2 ? "rubrique" : ""}`}>
                                <a onClick={() => setPage(2)}> 
                                    <span className="menu-sp">Expérience</span>  
                                </a> 
                            </li>
                            <li id={`${page === 3 ? "rubrique" : ""}`}> 
                                <a onClick={() => setPage(3)}> 
                                    <span className="menu-sp">Formation</span>  
                                </a> 
                            </li>
                            <li id={`${page === 4 ? "rubrique" : ""}`}> 
                                <a onClick={() => setPage(4)}> 
                                    <span className="menu-sp">Compétance</span>  
                                </a> 
                            </li>
                            <li id={`${page === 5 ? "rubrique" : ""}`}> 
                                <a onClick={() => setPage(5)}>     
                                    <span className="menu-sp">Langues</span>  
                                </a> 
                            </li>
                            <li id={`${page === 6 ? "rubrique" : ""}`}> 
                                <a onClick={() => setPage(6)}> 
                                    <span className="menu-sp">Centre d'intert</span>  
                                </a> 
                            </li>
                            {/* <li> 
                                <a>
                                    <span className="menu-sp">Divers</span>
                                </a> 
                            </li> */}
                        </ul>                     
                    </div>  
                    { children }
                </div>
            </div>
        </div>

    );
};

export default GeneraleBanner;