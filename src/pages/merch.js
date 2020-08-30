import React from "react"
import Layout from "../components/layout"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import merchStyles from "../styles/merch.module.scss"

const getImages = graphql`
{
  fluid: file(relativePath: {eq: "hat-ed.png"}) {
    childImageSharp {
      fluid{
        ...GatsbyImageSharpFluid
      }
    }
  }
} 
`

const MerchPage = () => {
  const data = useStaticQuery(getImages)

  return (
    <>
      <Layout>
        <div className={merchStyles.sectionHeader}>
          <h1>Merch</h1>
          <div >
            <Image fluid={data.fluid.childImageSharp.fluid} alt='ed with a hat'></Image>
          </div>
          <h3>
              Here is where I would put my merch if had any following, or
              merch...
          </h3>
        </div>
      </Layout>
    </>
  )
}

export default MerchPage
