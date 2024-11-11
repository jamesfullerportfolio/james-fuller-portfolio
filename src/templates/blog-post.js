import React from "react"
import { graphql } from "gatsby"

export default function BlogPost({ data }) {
  const post = data.wpPost
  return (
    <div>
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </div>
  )
}

export const query = graphql`
  query($id: String!) {
    wpPost(id: { eq: $id }) {
      title
      content
    }
  }
`

