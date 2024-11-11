import React from "react"
import { Link, graphql } from "gatsby"

export default function Home({ data }) {
  return (
    <div>
      <h1>James Fuller's Portfolio</h1>
      <h2>Blog Posts</h2>
      {data.allWpPost.nodes.map(post => (
        <div key={post.id}>
          <Link to={post.uri}>
            <h3>{post.title}</h3>
          </Link>
        </div>
      ))}
    </div>
  )
}

export const query = graphql`
  {
    allWpPost {
      nodes {
        id
        title
        uri
      }
    }
  }
`

