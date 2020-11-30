import React from 'react';
import Footer from '../modules/Footer'
import Header from '../modules/Header'

const HeaderFooterLayout = ({children}) => (
    <>
        <Header/>
            {children}
        <Footer/>
    </>
)

export default HeaderFooterLayout