import React from 'react'
import styles from './style.module.css'

import {navTabs} from '../../constants/const'
import {Link} from 'gatsby'

const Navigation = ({activeTab}) => {

    return (
        <nav className={styles.navigation}>
            {navTabs.map(({tab,to}) => (
                <Link to={to}>
                    <li className={tab === activeTab ? styles.active: ''}>{tab}</li>
                </Link>)
            )}
            <div className={styles.dropdown}> ...</div>
        </nav>
    )
}

export default Navigation
