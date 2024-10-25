import React from 'react';
import user from "../Assets/userIcon.svg"

function Header(props) {
    
    return (

        <header className='d-flex justify-content-between'>
            <h1 className='fs-2 fw-bold'>{props.name}</h1>
            <img src={user} alt="" style={{width:"30px"}} className="d-block ms-auto mt-3"/>
        </header>
    )
}

export default Header;