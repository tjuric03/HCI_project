import React from "react"
import Featured from "../../components/Featured"
import LatestNews from "../../components/LatestNews"

import styles from "./style.module.css"

const TitlePage = () => {
  return (
    <section >
        <Featured ></Featured>
        <LatestNews></LatestNews>
    </section>
  )
}

export default TitlePage
