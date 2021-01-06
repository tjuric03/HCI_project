import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"


const HeaderImage = ({children}) => {
  const data = useStaticQuery(graphql`
  query {
    file(relativePath: {eq: "headerBackground.png"}) {
      id
      childImageSharp {
        fluid(maxWidth: 1681, maxHeight: 185, fit: FILL, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
  `)
  return (
    <BackgroundImage
        tag = "div"
        fluid={data.file.childImageSharp.fluid}
        style={{display: "block", minHeight:"89px", zIndex: 5, backgroundPosition:"left"}}
        fadeIn={false}
        loading="eager"
    >
        {children}
    </BackgroundImage>
  )
}

export default HeaderImage