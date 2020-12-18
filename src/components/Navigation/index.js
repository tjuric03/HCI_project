import React from 'react'
import styles from './style.module.css'

import {navTabs} from '../../constants/const'
import {Link} from 'gatsby'

const Navigation = ({activeTab,componentStyle}) => {

    return (
        <nav className={componentStyle === "Header" ? styles.navigation : styles.navigationFooter}>
            {navTabs.map(({tab,to},index) => (
                <Link className={styles.link} key={index} to={to} style={componentStyle === "Header" ? {padding:"0px 15px",position:"relative"} : {}}>
                    <li className={tab === activeTab ? styles.active: ''}>{tab}</li>
                </Link>)
            )}
        </nav>
    )
}

export default Navigation
