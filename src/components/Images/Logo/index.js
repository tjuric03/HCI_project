import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import styles from "./style.module.css"

const Logo = () => {
    const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 600, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
      <Img fluid={data.file.childImageSharp.fluid} alt="Logo" className = {styles.logo} />
  )
}

export default Logo
