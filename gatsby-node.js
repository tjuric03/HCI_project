/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */


// We will programatically create news posts here for each post in Contentful

const path = require(`path`)
const { graphql } = require("gatsby")

exports.createPages = ({ graphql, actions }) => {

    const { createPage } = actions

    const newsPost = path.resolve(`./src/templates/news-post-contentful.js`)

    return graphql(`
    {
      allContentfulPost(filter: {node_locale: {eq: "en-US"}}, sort: {fields: date, order: DESC}) {
        edges {
          node {
            slug
          }
          previous {
            slug
          }
          next {
            slug
          }
        }
      }
      }
      
    `
    ).then(result => {
        if (result.errors) {
            throw result.errors
        }

    const posts = result.data.allContentfulPost.edges

    posts.forEach((post) => {
        createPage({
            path: `/news/${post.node.slug}`,
            component: newsPost,
            // context is sent to the template page as a prop
            context:{
                slug: post.node.slug,
                prev: post.previous,
                next: post.next
            }
        })
    })
    })
}
