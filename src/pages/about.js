import React from "react"
import AboutParagraph from "../components/AboutParagraph"
import HeaderFooterLayout from "../layouts/HeaderFooterLayout"
import { aboutContent1, aboutContent2, aboutContent3 } from "../constants/const"
import { graphql } from "gatsby"
import AboutHero from "../components/AboutHero"
import AboutText from "../components/AboutText"

const About = props => {
  const [about1, about2, about3] = props.data.allFile.edges

  return (
    <HeaderFooterLayout activeTab="About">
      <AboutHero></AboutHero>
      {/* <AboutText></AboutText> */}
      <div style={{display: "flex", flexDirection:"column", alignItems:"center"}}>
        <AboutParagraph content={aboutContent1} image={about1}>
          {" "}
        </AboutParagraph>
        <AboutParagraph content={aboutContent2} image={about3} reversed={true}>
          {" "}
        </AboutParagraph>
        <AboutParagraph content={aboutContent3} image={about2}>
          {" "}
        </AboutParagraph>
      </div>
    </HeaderFooterLayout>
  )
}

export default About

export const imageQuery = graphql`
{
  allFile(filter: {extension: {regex: "/(jpg)|(jpeg)|(png)/"}, relativeDirectory: {eq: "about"}}) {
    edges {
      node {
        childImageSharp {
          fluid(maxWidth: 900, maxHeight: 600, quality: 100,cropFocus: CENTER) {
            originalName
            ...GatsbyImageSharpFluid
          }
          fixed(width: 400, height: 400, cropFocus: CENTER, quality: 100){
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  }
}
`
