import React, {useEffect} from 'react';

function Logout(props) {
    localStorage.clear()
    window.location ="/"
    return null
}

export default Logout;
