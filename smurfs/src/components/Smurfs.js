import React, { useContext } from 'react';
import SmurfContext from '../contexts/SmurfContext';
import Smurf from './Smurf';

function Smurfs() {
    const {smurfs} = useContext(SmurfContext)
    return(
        <div className="smurfs">
            <ul>
                {
                smurfs.map(smurf => (
                    <Smurf smurf={smurf}/>
                ))
                }
            </ul>
        </div>
    )
}

export default Smurfs