const path = require("path")

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            fields {
              slug
              langKey
            }
            frontmatter {
              templateKey
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()))
      return Promise.reject(result.errors)
    }
  
    const posts = result.data.allMarkdownRemark.edges
    
    posts.forEach(edge => {
      const page = {
        path: edge.node.fields.slug,
        component: require.resolve(
          `./src/templates/${String(edge.node.frontmatter.templateKey)}.js`
        ),
        context: {
          langKey: edge.node.fields.langKey,
        },
      }
      createPage(page)
    })
  })
}
