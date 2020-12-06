import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const NewsImage2 = () => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "news2.jpg" }) {
        id
        childImageSharp {
          fixed(width: 340, height: 191, quality: 100) {
            ...GatsbyImageSharpFixed
          }
          fluid(maxWidth: 340, maxHeight: 191, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <div style={{ width: "340px", height: "191px" }}>
      <Img fluid={data.file.childImageSharp.fluid} />
    </div>
  )
}

export default NewsImage2
