import React from 'react'
import styles from './style.module.css'
import BackgroundImage from "gatsby-background-image"
import { useStaticQuery, graphql } from "gatsby"

const AboutHero = () => {

    const data = useStaticQuery(graphql`
    query {
        file(relativePath: {eq: "ioc.jpg"}) {
          id
          childImageSharp {
            fluid(quality: 100, maxHeight: 1080, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
      
    `)

    return(
        <BackgroundImage
            Tag="section"
            className={styles.featuredImage}
            fluid={data.file.childImageSharp.fluid}
            backgroundColor={`#040e18`}
        >
            <div>
                <h1>THE INTERNATIONAL OLYMPIC COMMITEE</h1>
            </div>
        </BackgroundImage>
    )
}

export default AboutHero;