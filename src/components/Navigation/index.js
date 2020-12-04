import React from 'react'
import styles from './style.module.css'

import {navTabs} from '../../constants/const'

const Navigation = ({activeTab}) => {

    return (
        <nav className={styles.navigation}>
            {navTabs.map(tab => <li className={tab === activeTab ? styles.active: ''}>{tab}</li>)}
            <div className={styles.dropdown}> ...</div>
        </nav>
    )
}

export default Navigation