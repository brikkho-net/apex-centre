
const path = require('path');
const createPaginatedPages = require('gatsby-paginate');
const { fmImagesToRelative } = require('gatsby-remark-relative-images');



exports.createPages = ({ graphql, actions }) => {
    const { createPage, createRedirect } = actions
  
    createRedirect({ fromPath: 'https://pensive-colden-b47476.netlify.com/*', toPath: 'https://www.apex-centre.com/:splat', isPermanent: true, force: true });
  
    return new Promise((resolve, reject) => {
      const blogPostTemplate = path.resolve(`src/templates/news-post.js`);
      resolve(
        graphql(
          `
            {
              allMarkdownRemark(sort: {
                fields: [frontmatter___timePosted]
                order: DESC
              }) {
                edges {
                  node {
                    id
                    frontmatter {
                      path
                      title
                      description
                      date
                      path
                      tags
                      timePosted
                    }
                  }
                }
              }
            }
          `
        ).then(result => {
          if (result.errors) {
            reject(result.errors)
          }

  
          result.data.allMarkdownRemark.edges.forEach(({ node }) => {
            const path = node.frontmatter.path
            createPage({
              path,
              component: blogPostTemplate,
              context: {
                currentPath: path
              }
            })
          })
          createPaginatedPages({
            edges: result.data.allMarkdownRemark.edges,
            createPage: createPage,
            pageTemplate: 'src/templates/all-news.js',
            pathPrefix: 'all/news',
            pageLength: 6,
          })
        })
      )
    })
  }

exports.onCreateNode = ({ node }) => {
  fmImagesToRelative(node);
};