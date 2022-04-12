import React, { useLayoutEffect } from 'react';
import {Link} from 'react-router-dom';
function Navbar(){
    return(
        <ul>
            <li><Link to="/">Homee</Link> </li>
            <li><Link to="/services">ser</Link> </li>
        </ul>
    );
}
export default Navbar;