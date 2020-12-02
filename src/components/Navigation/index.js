import React from 'react'
import styles from './style.module.css'

import {navTabs} from '../../constants/const'

const Navigation = () => {
    return (
        <section className={styles.navigation}>
            {navTabs.map(tab => <li className={styles.navigation}>{tab}</li>)}
        </section>
    )
}

export default Navigation