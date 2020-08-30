import React from "react"
import Layout from "../components/layout"
// import BlogPost from "./blogpost"
import blogStyles from '../styles/blog.module.scss'
import { graphql  } from 'gatsby'
import Image from 'gatsby-image'
import { Link } from 'gatsby'

export const query = graphql`
{
  allContentfulBlogPost {
    nodes {
      categories
      date(formatString: "MMMM Do, YYYY")
      postCover {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      title
      id
      slug
    }
  }
  fluid: file(relativePath: {eq: "dear-diary.jpg"}) {
    childImageSharp {
      fluid{
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`

const BlogPage = ({data}) => {
  const { 
    allContentfulBlogPost:{nodes:blogposts},
  } = data


  return (
    <>
      <Layout>
        <section className={blogStyles.header}>


          <h1>Ideas <span className="primary-dark-color">worthy</span> of pursuit.</h1>

          <div className={blogStyles.sectionHeader}>
            <div>
              <Image fluid={data.fluid.childImageSharp.fluid}></Image>
            </div>
            {/* <img
              alt="ed with a hat"
              src="./notebook-ed.png"
              width="320px"
              height="240px"
            /> */}
            <p>
              Here I display any ideas and thoughts I consider worth writting
              out. Nothing too specific or contrained to a certain topic.. just
              ideas that I like developing in writting to have a stronger grasp
              at them.
            </p>
          </div>
          <br/>
          {/* <BlogPost/> */}

        </section>
        <section className={blogStyles.blogGrid}>
        {blogposts.map(blogpost=>{
            return(
              
                <article className={blogStyles.container}>
                  <Link to={`/blog/${blogpost.slug}`}>
                    <div>
                      <Image fluid={blogpost.postCover.fluid} ></Image>
                    </div>
                    <p>{blogpost.date}</p>
                    <h2>{blogpost.title}</h2>
                  </Link>
                </article>
              
            )
        })}
        </section>
      </Layout>
    </>
  )
}

export default BlogPage
