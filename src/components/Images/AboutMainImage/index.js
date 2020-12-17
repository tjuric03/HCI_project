import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const AboutMainImage = () => {
  const data = useStaticQuery(graphql`
  query {
    file(relativePath: {eq: "main_about.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 800, maxHeight:400, quality: 100, fit:FILL) {
            ...GatsbyImageSharpFluid
        }
      }
    }
  }
  
  `)
  return (
    <Img fluid={data.file.childImageSharp.fluid} />
  )
}

export default AboutMainImage