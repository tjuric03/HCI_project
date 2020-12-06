import React from "react"
import NewsImage1 from "../Images/NewsImage1"
import NewsImage2 from "../Images/NewsImage2"
import NewsArticle from "../NewsArticle"
import styles from './style.module.css'

const LatestNews = () => {

    return (
        <section className={styles.section}>
            <ul className={styles.newsList}>
                <li><NewsArticle header="News1" picture={<NewsImage1/>}/></li>
                <li><NewsArticle header="News2" picture={<NewsImage2/>}/></li>
                <li><NewsArticle header="News3" picture={<NewsImage1/>}/></li>
            </ul>
        </section>
    )
}

export default LatestNews