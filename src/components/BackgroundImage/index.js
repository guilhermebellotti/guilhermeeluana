import * as React from "react"
import * as S from "./styles"

import { StaticQuery, graphql } from "gatsby"

const Image = ({ name, alt, className }) => (
  <StaticQuery
    query={graphql`
      query AllImages {
        allImagesWithoutSVGExtension: allFile(
          filter: {
            sourceInstanceName: { eq: "images" }
            extension: { regex: "/jpeg|jpg|png|gif/" }
          }
        ) {
          nodes {
            publicURL
            extension
            sharp: childImageSharp {
              fluid(maxWidth: 2440, quality: 100) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
        allImagesWithSVGExtension: allFile(
          filter: {
            sourceInstanceName: { eq: "images" }
            extension: { eq: "svg" }
          }
        ) {
          nodes {
            publicURL
            extension
          }
        }
      }
    `}
    render={({ allImagesWithoutSVGExtension, allImagesWithSVGExtension }) => {
      const isNameWithSVGExtension = name.indexOf("svg") !== -1

      const renderImageWithSVGExtension = () => {
        const image = allImagesWithSVGExtension.nodes.find(
          ({ publicURL }) => publicURL && publicURL.indexOf(name) !== -1
        )
        return image ? (
          <img
            className={className}
            src={image.publicURL}
            alt={alt}
            width={100}
            height={100}
          />
        ) : null
      }

      const renderImageWithoutSVGExtension = () => {
        const image = allImagesWithoutSVGExtension.nodes.find(
          ({ publicURL }) => publicURL && publicURL.indexOf(name) !== -1
        )
        return image && image.sharp && image.sharp.fluid ? (
          <S.Image
            className={className ? className : ""}
            fluid={image.sharp.fluid}
            alt={alt ? alt : ""}
            title={alt ? alt : ""}
          />
        ) : null
      }

      return isNameWithSVGExtension
        ? renderImageWithSVGExtension()
        : renderImageWithoutSVGExtension()
    }}
  />
)

export { Image }
