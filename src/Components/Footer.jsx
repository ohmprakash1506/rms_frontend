import React from 'react'
import "../Styles/footer.css"

import logo from "../Assets/RSM.svg"

function Footer() {
    return (
        <footer className='d-flex justify-content-center mt-4'>
            <a className='mx-4'>Contact</a>
            <a className='mx-4'>Privacy Policy</a>
            <a className='mx-4'>Terms and Conditions</a>
        </footer>
    )
}

export default Footer
