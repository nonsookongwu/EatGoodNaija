import styled from "styled-components";

export const StyledOurMenu = styled.div`
  padding: 0 2rem;
  margin: 2rem auto;
  display: grid;
  gap: 1rem;
  grid-template-columns: (1fr);
  grid-template-areas:
    "top"
    "left"
    "right";

  &:nth-child(1) {
    padding: 0 3rem;
  }
  :nth-child(1) {
    grid-area: top;
  }
  :nth-child(2) {
    grid-area: left;
  }
  :nth-child(3) {
    grid-area: right;
  }

  section {
    display: flex;
    justify-content: left;
    align-items: center;
    gap: 1rem;
    width: fit-content;
    height: 3rem;
    padding: 1rem;
    border-radius: 2rem;

    img {
      width: 48px;
      height: 48px;
      border-radius: 50%;
      background: #fff;
    }
  }

  @media (min-width: ${({ theme }) => theme.mobile}) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-areas:
      "top top top"
      "left right right";
  }
`;

export const ScrollButton = styled.div`
  width: 34px;
  height: 34px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e0e0e0;
`;
