import React from 'react'
import AboutParagraph from '../components/AboutParagraph'
import HeaderFooterLayout from '../layouts/HeaderFooterLayout'
import {aboutText1} from '../constants/const'
import AboutMainImage from '../components/Images/AboutMainImage'
import { graphql } from 'gatsby'

const About = (props) => {

    const [about2,about3,about4] = props.data.allFile.edges;
    console.log(about2,about3,about4);
    
    return (
        <HeaderFooterLayout activeTab="About">
            <div style={{margin:"20px auto", maxHeight:"400px", maxWidth: "800px"}}>
                <AboutMainImage/>
            </div>
            <AboutParagraph text={aboutText1} image={about2}> </AboutParagraph>
            <AboutParagraph text={aboutText1} image={about3} reversed={true}> </AboutParagraph>
            <AboutParagraph text={aboutText1} image={about4}> </AboutParagraph>
        </HeaderFooterLayout>
    )
}

export default About

export const imageQuery = graphql`
    query imageQuery {
        allFile(filter: {name: {regex: "/about/"}}) {
        edges {
            node {
            id
            name
            childImageSharp {
                fluid(maxWidth: 800, maxHeight:600 quality: 100, fit:FILL) {
                    ...GatsbyImageSharpFluid
                }
            }
            }
        }
        }
    }
  
`