import React from "react"
import Layout from "../components/layout"
import styles from "../styles/about.module.scss"
import {  graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"



const getImages = graphql`
{
  fluid: file(relativePath: {eq: "ed-smile.png"}) {
    childImageSharp {
      fluid{
        ...GatsbyImageSharpFluid
      }
    }
  }

  pdf:file(extension: {eq: "pdf"}) {
    publicURL
  }
} 
`

const About = () => {
  const data = useStaticQuery(getImages)
  // console.log(data.pdf.publicURL)
  return (
    <>
      <Layout>
        <div class="container">
          <h1>Eugenio Martínez</h1>

          
          <div>
            <div className={styles.container}>
              <Image fluid={data.fluid.childImageSharp.fluid } />
              <div className={styles.content}>
                <p>
                  <ul>
                    <li>
                    Location: Mexico
                    </li>
                    {/* <li>Email: <a href="mailto:emtzhd@gmail.com">emtzhd@gmail.com</a>
                    </li>
                    <li>
                    Phone number: <a href="tel:+(52)4921249235">+(52) 492-124-9235</a>
                    </li> */}
                    <li>
                    Linkedin: <a href='https://www.linkedin.com/in/soyyuyin/' target='blank'>linkedin.com/in/soyyuyin/</a>
                    </li>
                    <li>
                      <a href='/2021-02-Eugenio-Martinez-web-developer.pdf' target="blank">Get my full CV</a>
                    </li>
                  </ul>
                </p>
              </div>
            </div>
            <h2>Web developer</h2>

            <section className={styles.technologies}>         
              <h3>Technologies</h3>
              <ul >
                <li>HTML5</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>Python</li>
                <li>Git</li>
                <li>React</li>            
                <li>Gatsby</li>
                <li>Next</li>
                <li>SQL</li>
                <li>Node.js</li>
                <li>Express</li>
                <li>Contentul</li>
                <li>Netlify</li>
                <li>Heroku</li>
                <li>Adobe XD</li>
                <li>Responsive design</li>
              </ul>
            </section>            
            <h3 >Projects</h3>
            <section className={styles.projectsGrid}>
              {/* <h4>Courses and certifications</h4> */}
                <a href='/' className={styles.projectCard}>
                  <p><strong>Personal Website</strong></p>
                  <p>Developed using Gatsby, Contentful as the CMS and Netlify for deployment.</p>
                </a>

                <a href='https://salonlachiripa.com/' target='blank' className={styles.projectCard}>
                  <p><strong>La Chiripa event venue website</strong></p>
                  <p>Static website using plain HTML and CSS, hosted on Netlify</p>
                </a>

                <a href='https://mini-react-blog.herokuapp.com/' target='blank' className={styles.projectCard}>
                  <p><strong>Mini react blog</strong></p>
                  <p>Small react blog developed using create-react-app, hosted with Heroku, back-end emulated using My JSON Server from Typicode.</p>
                </a>
            </section>

            <section className={styles.technologies}>
              <h3>Languages</h3>
              <ul>
                <li>Spanish (native)</li>
                <li>English</li>
              </ul>
            </section>          
            {/* <h3>Contact me</h3>
            <ul>
              <li>
                <strong> test@gmail.com</strong>
              </li>
              <li>
                <strong> 123-456-7890</strong>
              </li>
            </ul> */}
          </div>
        </div>
      </Layout>
    </>
  )
}

export default About
