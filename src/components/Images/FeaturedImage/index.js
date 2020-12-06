import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const FeaturedImage = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      file(relativePath: { eq: "trampoline.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800, maxHeight:450, cropFocus: CENTER, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return(
    <div style={{minWidth:"500px",maxWidth:"720px",flex:"1"}}> 
      <Img fluid={data.file.childImageSharp.fluid} alt="FeatureImage"/>
    </div>
  )
}

export default FeaturedImage
