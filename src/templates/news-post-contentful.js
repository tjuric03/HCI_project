import { graphql } from "gatsby"
import React from "react"
import HeaderFooterLayout from "../layouts/HeaderFooterLayout"
import Img from "gatsby-image"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import styles from "./style.module.css"

const NewsPostContentful = props => {

    const post = props.data.contentfulPost;
    const content = documentToReactComponents(JSON.parse(post.content.raw));
    console.log(content);

    return (
        <HeaderFooterLayout activeTab="News">
            <div className={styles.container}>
                <article className={styles.article}>
                    <h1>{post.title}</h1>
                    <div className={styles.author}>{post.author}</div>
                    <hr  width="150" align="left"></hr>
                    <div style={{minWidth:"500px",maxWidth:"720px", margin:"30px auto"}}> 
                        <Img fluid={post.image.fluid}/>
                    </div>
                    <div>{content}</div>
                    <div>{post.sport}</div>
                    <div>{post.date}</div>
                </article>
            </div>
        </HeaderFooterLayout>
    )
}



export default NewsPostContentful

// Page query (Only one per page allowed, the results go to props.data of the page component)
// $slug is passed from the context object defined in createPage function in gatsby-node.js
export const pageQuery = graphql`
    query MyQuery($slug: String!) {
        contentfulPost(slug: {eq: $slug}) {
        id
        author
        date
        image {
            fluid(maxWidth: 1100, maxHeight: 600, quality: 100) {
                ...GatsbyContentfulFluid
            }
            title
            description
        }
        sport
        title
        content {
            raw
        }
        }
    }      
`
