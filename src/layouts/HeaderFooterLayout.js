import React from 'react';
import Footer from '../modules/Footer'
import Header from '../modules/Header'

const HeaderFooterLayout = ({children, activeTab}) => (

    <div style={{display: "flex", flexDirection: "column", minHeight: "100vh"}}>
        <Header activeTab={activeTab}/>
            <div style={{flex: 1}}>
                {children}
            </div>
        <Footer/>
    </div>
)

export default HeaderFooterLayout