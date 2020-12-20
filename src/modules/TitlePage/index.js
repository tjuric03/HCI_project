import React from "react"
import Featured from "../../components/Featured"
import LatestNews from "../../components/LatestNews"
import Cards from "../../components/Cards"


import styles from "./style.module.css"

const TitlePage = ({newsArray}) => {

  const mostRecentNews = newsArray[0];

  return (
    <section className={styles.container}>
        <Featured mostRecentNews={mostRecentNews}></Featured>
        <Cards news={newsArray.slice(1,6)}></Cards>
        {/* <LatestNews news={newsArray.slice(1)}></LatestNews> */}
    </section>
  )
}

export default TitlePage


