// import {graphql, useStaticQuery} from 'gatsby'
// const useInstagram = () => {
//     const data = useStaticQuery(graphql`
//  query myQuery {
//   allInstagramContent {
//     edges {
//       node {
//         caption
//         media_url
//         localImage {
//           childImageSharp {
//             gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
//           }
//         }
//         album {
//           localImage {
//             childImageSharp {
//               gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
//             }
//           }
//         }
//       }
//     }
//   }
// }
//     `)
//     return data.allInstagramContent.edges.map(node => ({
//         // ...node.localFile.childImageSharp,
//         id: node.id,
//         caption: node.caption,
//         username: node.username
//     }))
// }
// export default useInstagram