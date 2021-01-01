import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Someity = () => {
  const data = useStaticQuery(graphql`
  {
    file(relativePath: {eq: "Someity.png"}) {
      childImageSharp {
        fluid(maxWidth: 300, maxHeight: 400) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
  
  `)
  return (
    <Img fluid={data.file.childImageSharp.fluid} imgStyle={{objectFit:"contain"}}/>
  )
}


export default Someity