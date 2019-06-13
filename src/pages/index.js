import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => {

  const { allWordpressPost } = useStaticQuery(
    graphql`
      {
        allWordpressPost {
          nodes {
            id
            date
            title
            content
          }
        }
      }
    `
  )

  return <Layout>
      <div>
      {
        allWordpressPost.nodes.map(node => {
          return <div key={node.id}>
            <h1>{node.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: node.content }} ></div>
          </div>
        })
      }
      </div>
  </Layout>
}

export default IndexPage
