import React from "react"
import styles from './style.module.css'

const PageTitle = ({title}) => {
    
    return (
        <div className={styles.container}>{title}</div>
    )
}

export default PageTitle