import React from 'react';
import error from './404.gif';

const Error = () => {
    return(
        <>
    <div>
        <center>
        {/* <h1>404 Error</h1>
        <h1>Page Not Found</h1> */}
        <br></br>
        <img src={error} alt="" width="1500" height="500"/>
        </center>
    </div>
        </>
    )
}
export default Error;