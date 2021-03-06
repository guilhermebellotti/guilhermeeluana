import { AnchorLink } from "gatsby-plugin-anchor-links"
import styled from "styled-components"

export const Container = styled.header`
  height: 100vh;
  min-height: 500px;
  width: 100%;

  .react-parallax {
    height: 100%;
    width: 100%;
    position: absolute !important;
  }
  @media (min-width: 768px) {
    min-height: 675px;
  }
`
export const BackgroundImage = styled.div`
  position: fixed !important;
  width: 100%;
  height: 100vh;
  top: 0;
  z-index: 1;
  .gatsby-image-wrapper {
    position: fixed !important;
    width: 100%;
    height: 100vh;
    top: 0;
    z-index: 1;
    img {
      /* object-position: center bottom !important; //Photo central */
      object-position: right bottom !important; //Photo left
    }
  }
`
export const TextInfos = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 87vh;
  min-height: 500px;
  /* padding: 0 10px; */
  width: 100%;
  position: relative;
  z-index: 2;
  @media (min-width: 768px) {
    min-height: 675px;
  }
  @media (max-height: 400px) {
    min-height: 350px;
  }
  @media (max-width: 768px) {
  }

  @media (max-width: 350px) {
  }
`
export const Title = styled.h1`
  margin-top: 30px;
  font-size: 4.5rem;
  margin-bottom: 0;
  text-align: center;
  color: white;
  br {
    display: none;
  }
  @media (max-height: 400px) {
    margin-top: 15px;
  }
  @media (max-width: 585px) {
    font-size: 2.65rem;
  }
  @media (max-width: 400px) {
    line-height: 40px;
    br {
      display: block;
    }
  }
`
export const SubTitle = styled.h2`
  font-size: 1.75rem;
  margin: 0;
  color: white;
  br {
    display: none;
  }
  @media (max-width: 585px) {
    font-size: 1.15rem;
  }
  @media (max-width: 400px) {
    margin-top: 15px;
    text-align: center;
    span {
      display: none;
    }
    br {
      display: block;
    }
  }
`
export const ScrollDown = styled(AnchorLink)`
  margin-top: 20px;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50px;
  height: 90px;
  span {
    position: relative;
    margin-bottom: 10px;
    width: max-content;
    &::after {
      content: "";
      position: absolute;
      width: 100%;
      height: 1px;
      background-color: white;
      bottom: 0;
      left: 0;
    }
  }
  svg {
    @keyframes example {
      0% {
        transform: translateY(0);
        opacity: 1;
      }
      25% {
        opacity: 1;
      }
      75% {
        transform: translateY(60px);
        opacity: 0;
      }
      100% {
        transform: translateY(0);
        opacity: 0;
      }
    }
    animation: example 2s ease infinite;
  }
  @media (max-height: 400px) {
    margin-top: 15px;
  }
`
