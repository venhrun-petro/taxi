import { useStaticQuery, graphql } from 'gatsby'

const useImagesQuery = () =>
  useStaticQuery(graphql`
    query ImagesQuery {
      allFile(filter: {sourceInstanceName: {eq: "/images"}}) {
        nodes {
          relativePath
          name
          publicURL
        }
      }
    }
  `).allFile.nodes

export default useImagesQuery
