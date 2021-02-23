import styled from "styled-components"

export const Container = styled.div`
  margin-top: 70px;
  padding-right: 75px;
  @media (max-width: 845px) {
    /* padding-right: 0px; */
    padding: 0 25px;
    width: calc(100% - 50px);
  }
`