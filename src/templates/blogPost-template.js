import React from 'react'
import Layout from '../components/layout'
import blogPostStyle from '../styles/blogPostStyle.module.scss'
import { graphql } from "gatsby"
import Image from "gatsby-image"
import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

const Bold = ({ children }) => <span className="bold">{children}</span>
const Text = ({ children }) => <p className="text-justify">{children}</p>

const options = {
  renderMark: {
    [MARKS.BOLD]: text => <Bold>{text}</Bold>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (postContent, children) => <Text>{children}</Text>,
  },
  
}

// documentToReactComponents(data.postContent.json, options)

// export default function PostTemplate() {
//   return (
//     <div>
//       <h1>hello from blog post template</h1>
//     </div>
//   )
// }

const BlogPost = (props) => {
  return(
    <Layout>
      <section className={blogPostStyle.container}>
          <Image fluid={props.data.contentfulBlogPost.postCover.fluid} ></Image>
        <h1>{props.data.contentfulBlogPost.title}</h1>
        <h4>{props.data.contentfulBlogPost.date}</h4>
        {documentToReactComponents(props.data.contentfulBlogPost.postContent.json,options)}
      </section>
    </Layout>
  )  
}

export const data = graphql`
query GetBlogPost ($slug: String)   {
  contentfulBlogPost (slug:{eq:$slug}) {
    date
    title
    postCover {
      fluid {
        ...GatsbyContentfulFluid
      }
    }
    postContent {
      json
    }
  }
}
`

export default BlogPost