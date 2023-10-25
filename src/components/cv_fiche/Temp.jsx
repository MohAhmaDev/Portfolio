import React, {useContext} from 'react';
import Competance from './views/Competance';
import Home from './views/Home';
import Formation from './views/Formation';
import Experience from './views/Experiance';
import Langues from './views/Langues';
import CentreIntert from './views/CentreIntert';
import GeneraleBanner from './contain/GeneraleBanner';
import { ThemeContext } from '../../context';



const Temp = ({ id }) => {

    const { page } = useContext(ThemeContext);

    return (
        <div id={id}>
            <GeneraleBanner>
                { page === 1 && <Home />}
                { page === 2 && <Experience /> }
                { page === 3 && <Formation />}
                { page === 4 && <Competance /> }
                { page === 5 && <Langues />}
                { page === 6 && <CentreIntert /> }
            </GeneraleBanner>
        </div>
    );
};

export default Temp;