const path = require("path")
exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;
    const allPosts = await graphql(`
    {
        allWpPost {
            nodes {
              title
              content
              featuredImage {
                node {
                  sourceUrl
                  srcSet
                }
              }
              slug
              categories {
                nodes {
                  slug
                }
              }
            }
          }
}
`)

    const allPages = await graphql(`
 {
    allWpPage {
      nodes {
        title
        slug
        content
      }
    }
  }`)
    //  console.log("data==>>")
    allPosts.data.allWpPost.nodes.forEach(item => {
        createPage({
            path: `/${item.categories.nodes.map(category => category.slug)}/${item.slug}`,
            component: path.resolve(`${__dirname}/src/templates/blogPost.jsx`),
            context: {
                data: item
            },
        })
    })
    allPages.data.allWpPage.nodes.forEach(item => {
        createPage({
            path: `/${item.slug}`,
            component: path.resolve(`${__dirname}/src/templates/customPage.jsx`),
            context: {
                data: item
            },
        })
    })

}