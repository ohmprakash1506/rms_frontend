import React from 'react'
import Nav from "../Components/Navigation/NavBar";
import Header from '../Components/Header';
import Footer from '../Components/Footer';

import "../Styles/navigation.css"

function Layout({ children, name }) {

    return (
        <>

            <div className='container-fluid'>

                <div className='row'>
                    <div className='col-xl-2 ps-0 navBar'>
                        <Nav />
                    </div>

                    <div className='col-xl-10'>
                        <Header name={name} />
                        {children}
                        
                    </div>
                   
                </div>

                <Footer />
            </div>

        </>
    )
}

export default Layout