import React from "react"
import AboutParagraph from "../components/AboutParagraph"
import HeaderFooterLayout from "../layouts/HeaderFooterLayout"
import { aboutContent1, aboutContent2, aboutContent3 } from "../constants/const"
import { graphql } from "gatsby"
import AboutHero from "../components/AboutHero"

const About = props => {
  const [about1, about2, about3] = props.data.allFile.edges

  return (
    <HeaderFooterLayout activeTab="About">
      <AboutHero></AboutHero>
      <div style={{display: "flex", flexDirection:"column", alignItems:"center"}}>
        <AboutParagraph content={aboutContent1} image={about1}>
          {" "}
        </AboutParagraph>
        <AboutParagraph content={aboutContent2} image={about2} reversed={true}>
          {" "}
        </AboutParagraph>
        <AboutParagraph content={aboutContent3} image={about3}>
          {" "}
        </AboutParagraph>
      </div>
    </HeaderFooterLayout>
  )
}

export default About

export const imageQuery = graphql`
{
  allFile(filter: {extension: {regex: "/(jpg)|(jpeg)|(png)/"}, relativeDirectory: {eq: "about"}}, sort: {order: ASC, fields: name}) {
    edges {
      node {
        childImageSharp {
          fluid(maxWidth: 900, maxHeight: 600, quality: 80, cropFocus: CENTER) {
            ...GatsbyImageSharpFluid_withWebp
          }
          fixed(width: 400, height: 400, cropFocus: CENTER, quality: 70) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
    }
  }
}
`
