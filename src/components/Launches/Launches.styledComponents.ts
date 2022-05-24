import styled from "styled-components";

export const LaunchesStyled = styled.div`
  padding-top: 100px;
`;

export const FiltersBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-items: stretch;
  position: sticky;
  top: 0;
  padding: 15px 0;
  box-sizing: border-box;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const FiltersButton = styled.div`
  display: flex;
  justify-content: end;
  box-sizing: border-box;
  padding-right: 50px;
  @media screen and (min-width: 769px) {
    display: none;
  }
`;

export const LaunchesGrid = styled.div`
  margin: 0 auto;
  margin-top: 50px;
  margin-bottom: 50px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`;

export const NoLaunches = styled.div`
  margin-top: 25px;
  text-align: center;
`
export const StickyContainer = styled.div`
  background-color: #1a1919;
  position: sticky;
  top: 0;
`