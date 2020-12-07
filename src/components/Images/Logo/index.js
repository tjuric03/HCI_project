import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

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
    <div style={{minWidth:"150px",maxWidth:"200px",flex:"1"}}> 
      <Img fluid={data.file.childImageSharp.fluid} alt="Logo"/>
    </div>
  )
}

export default Logo
