import React, { useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import SmurfContext from '../contexts/SmurfContext';

function SmurfDetail() {
    const {smurfs} = useContext(SmurfContext)
    const params = useParams()
    return (
    <>
        {
        smurfs.filter(smurf => {
            return smurf.id === parseInt(params.smurfId)
        }).map(smurf => (
            <div className="smurf-details">
                <div className="smurf-text">
                    <h3>Smurf Details</h3>
                    <div className="smurf-name">Name: {smurf.name}</div>
                    <div className="smurf-height">Height: {smurf.height}</div>
                    <div className="smurf-age">Age: {smurf.age}</div>
                </div>
                <img src="http://www.pngplay.com/wp-content/uploads/2/Smurfs-Transparent-Images.png" alt="Smurf" />
            </div>        
        ))}

        <Link to="/" className="go-back">Go Back</Link>
    </>
    )
}

export default SmurfDetail