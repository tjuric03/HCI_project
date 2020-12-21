import React from "react"
import Featured from "../../components/Featured"
import Cards from "../../components/Cards"

import styles from "./style.module.css"
import Paralympics from "../../components/Paralympics"

const TitlePage = ({newsArray}) => {

  const mostRecentNews = newsArray[0];

  return (
    <section className={styles.container}>
        <Featured mostRecentNews={mostRecentNews}></Featured>
        <Cards news={newsArray.slice(1,6)}></Cards>
        <Paralympics></Paralympics>
    </section>
  )
}

export default TitlePage


