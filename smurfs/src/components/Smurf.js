import React from 'react';
import { Link } from 'react-router-dom';

function Smurf(props) {
    return (
        <li>
            <Link to={`/smurf/${props.smurf.id}`}>
            {
                props.smurf.name
            }
            </Link>
        </li>
    )
}

export default Smurf