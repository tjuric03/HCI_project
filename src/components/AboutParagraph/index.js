import React from "react"
import styles from "./style.module.css"
import Img from "gatsby-image"

const AboutParagraph = ({image, text, reversed}) => {
    return(
        <section className={reversed ? `${styles.aboutParagraph} ${styles.reverse}`: styles.aboutParagraph}>
            <div className={styles.image}>
                <Img fluid={image.node.childImageSharp.fluid}/>
            </div>
            <div className={styles.article}>
                <p>{text}</p>
            </div>
        </section>
    )
}

export default AboutParagraph

