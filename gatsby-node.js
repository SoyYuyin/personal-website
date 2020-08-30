// will return a function with the name of create page
//to create pages dinamically
// this function must return a promise
// either we can return a promise explicityly in the function body 
// or set it up as async/await and return a promise automatically




const path = require('path')

exports.createPages = async({ graphql, actions }) =>{
  const { createPage } = actions

  const result = await graphql(`
    query GetBlogPosts {
      blogPosts: allContentfulBlogPost {
        nodes {
          slug
        }
      }
    }
  `)
  result.data.blogPosts.nodes.forEach((blogPost)=>{
    createPage({
      path:`/blog/${blogPost.slug}`,
      component: path.resolve(`src/templates/blogPost-template.js`),
      context:{
        slug: blogPost.slug,
      }
    })
  })
}
