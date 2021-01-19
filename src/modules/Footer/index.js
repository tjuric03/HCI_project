import React from 'react'
import styles from './style.module.css'
import Logo from '../../components/Images/Logo'

import {AiFillFacebook,AiFillInstagram,AiFillTwitterSquare} from "react-icons/ai"

const Footer = () => (
    <>
    <footer className={styles.footer}>
        <div className={styles.categories}>
            <div className={styles.info}>
                <div style={{width:"180px", paddingBottom:"10px", margin:"auto"}}> 
                    <Logo/>
                </div>
                
                <ul className={styles.address}>
                    <li>International Olympic Committee</li>
                    <li>Château de Vidy</li>
                    <li>Case postale 356</li>
                    <li>1001 Lausanne</li>
                    <li>Switzerland</li>
                </ul>
            </div>
            <div>
                <ul className={styles.media}>
                    <a href="https://www.google.com/">
                        <li > <AiFillTwitterSquare size="60px" style={{verticalAlign:"middle"}}/> @Olympics</li>
                    </a>
                    <a href="https://www.google.com/">
                        <li> <AiFillInstagram size="60px" style={{verticalAlign:"middle"}}/> @olympics</li>
                    </a>
                    <a href="https://www.google.com/">
                        <li> <AiFillFacebook size="60px" style={{verticalAlign:"middle"}}/> /olympics</li>
                    </a>
                </ul>
            </div>
        </div>
    </footer>
    <div className={styles.copyright}>
        © Copyright 2021. All rights reserved
    </div>
    </>
)

export default Footer