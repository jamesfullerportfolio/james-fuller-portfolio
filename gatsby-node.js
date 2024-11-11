const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // Query for all posts
  const result = await graphql(`
    {
      allWpPost {
        nodes {
          id
          uri
        }
      }
    }
  `)

  // Create pages for each post
  result.data.allWpPost.nodes.forEach(post => {
    createPage({
      path: post.uri,
      component: path.resolve(`./src/templates/blog-post.js`),
      context: {
        id: post.id,
      },
    })
  })
}

