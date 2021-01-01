import React from "react"
import NewsArticle from "../NewsArticle"
import styles from "./style.module.css"
import { Link } from "gatsby"

const LatestNews = ({ news }) => {
  console.log(news)

  return (
    <section className={styles.section}>
      <ul className={styles.newsList}>
        {news.slice(0, 3).map(news => (
          <Link to={`/news/${news.node.slug}`}>
            <li>
              <NewsArticle header={news.node.title} date={news.node.date} picture={news.node.image.fluid}/>
            </li>
          </Link>
        ))}
      </ul>
    </section>
  )
}

export default LatestNews