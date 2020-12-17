import React from "react"
import Featured from "../../components/Featured"
import LatestNews from "../../components/LatestNews"

import styles from "./style.module.css"

const TitlePage = ({newsArray}) => {

  const mostRecentNews = newsArray[0];

  return (
    <section className={styles.container}>
        <Featured mostRecentNews={mostRecentNews}></Featured>
        <LatestNews news={newsArray.slice(1)}></LatestNews>
    </section>
  )
}

export default TitlePage


