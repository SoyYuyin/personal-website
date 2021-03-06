import React from "react"
import Layout from "../components/layout"
import indexStyles from "../styles/index.module.scss"
import { Link, graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"


const getImages = graphql`
{
  fluid: file(relativePath: {eq: "yuyin-noche.jpg"}) {
    childImageSharp {
      fluid{
        ...GatsbyImageSharpFluid
      }
    }
  }
} 
`


const Home = () => {
  const data = useStaticQuery(getImages)

  return (
    <>
      <Layout>
        <h1 className= {indexStyles.textCenter}>
          Yuyin's <span className="primary-dark-color">Personal</span> Website
        </h1>
        <h3 className="dark-color">Credit analyst.</h3>
        <h2>
          <span className="light-color">Conquering technology.</span> 
        </h2>

        <div>
          <div className={indexStyles.container}>
            <div >
              <Image fluid={data.fluid.childImageSharp.fluid}/>
            </div>
            <div className={indexStyles.content}>
              <p>Love to learn new technologies and code.</p>
              <br />
              <Link to='/about' className={indexStyles.link}>Hire me!</Link>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default Home