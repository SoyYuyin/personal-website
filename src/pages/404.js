import React from 'react'
import Layout from '../components/layout'
import { Link, graphql} from 'gatsby'
import Image from 'gatsby-image'


export const query = graphql`
{
  fluid: file(relativePath: {eq: "404.png"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`


export default function NotFound({data}) {
  console.log(data)
  return (
    <div>
      <Layout>
        <h1>This page does not exist</h1>
        <div>
          <Image fluid={data.fluid.childImageSharp.fluid}></Image>
        </div>
        <h3 style={{textAlign:'center'}}><Link to='/'>Go Back Home</Link></h3>

      </Layout>
    </div>
  )
}
