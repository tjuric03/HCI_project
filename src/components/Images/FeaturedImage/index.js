import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const FeaturedImage = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      file(relativePath: { eq: "trampoline.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return(
    <div style={{maxWidth: "800px", minWidth: "800px"}}> 
      <Img fluid={data.file.childImageSharp.fluid} alt="FeatureImage"/>
    </div>
  )
}

export default FeaturedImage
