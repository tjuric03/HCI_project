import React from 'react'
import styles from './style.module.css'
import Logo from '../../components/Images/Logo'
import Navigation from '../../components/Navigation'

import {AiFillFacebook,AiFillInstagram,AiFillTwitterSquare} from "react-icons/ai"

const Footer = () => (
    <>
    <footer className={styles.footer}>
        <div className={styles.categories}>
            <div>
                <div style={{width:"220px"}}> 
                    <Logo/>
                </div>
                
                <ul>
                    <li>International Olympic Committee</li>
                    <li>Château de Vidy</li>
                    <li>Case postale 356</li>
                    <li>1001 Lausanne</li>
                    <li>Switzerland</li>
                </ul>
            </div>
            <hr></hr>
                <div>
                    <Navigation className={styles.nav}></Navigation>
                </div>
            <hr></hr>
            <div>
                <ul className={styles.media}>
                    <li> <AiFillTwitterSquare size="64px" style={{verticalAlign:"middle"}}/> @Olympics</li>
                    <li> <AiFillInstagram size="64px" style={{verticalAlign:"middle"}}/>@olympics</li>
                    <li> <AiFillFacebook size="64px" style={{verticalAlign:"middle"}}/> facebook.com/olympics</li>
                </ul>
            </div>
        </div>
    </footer>
    <div className={styles.copyright}>
        © Copyright 2020. All rights reserved
    </div>
    </>
)

export default Footer