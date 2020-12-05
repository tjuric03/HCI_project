import React from "react"
import NewsArticle from "../NewsArticle"
import styles from './style.module.css'

const LatestNews = () => {

    return (
        <section className={styles.section}>
            <ul className={styles.newsList}>
                <li><NewsArticle/></li>
                <li><NewsArticle/></li>
                <li><NewsArticle/></li>
            </ul>
        </section>
    )
}

export default LatestNews