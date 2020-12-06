import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const FeaturedImage = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      file(relativePath: { eq: "trampoline.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800, maxHeight:400, cropFocus: CENTER, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return(
    <div style={{minWidth: "800px",maxWidth:"800px", }}> 
      <Img fluid={data.file.childImageSharp.fluid} alt="FeatureImage"/>
    </div>
  )
}

export default FeaturedImage
