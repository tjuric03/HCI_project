import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const NewsImage1 = () => {
   const data = useStaticQuery(graphql`
   query {
     myImage: file(relativePath: { eq: "news1.jpg" }) {
       childImageSharp {
         fixed(width: 340 height:191) {
           ...GatsbyImageSharpFixed
         }
       }
     }
   }
 `)
  return (
    <div style={{width: "340px", height: "191px"}}>
        <Img fixed={data.myImage.childImageSharp.fixed} />
    </div>
  )
}

export default NewsImage1