import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"


const HeaderImage = ({children}) => {
  const data = useStaticQuery(graphql`
  query {
    file(relativePath: {eq: "headerBackground.png"}) {
      id
      childImageSharp {
        fluid(maxWidth: 1920, maxHeight: 185, fit: FILL, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
  `)
  return (
    <BackgroundImage
        tag = "div"
        fluid={data.file.childImageSharp.fluid}
        style={{display: "block", minHeight:"88px", zIndex: 5, backgroundPosition:"left"}}
    >
        {children}
    </BackgroundImage>
  )
}

export default HeaderImage