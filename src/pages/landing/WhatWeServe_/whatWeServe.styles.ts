import styled from "styled-components";

export const StyledWhatWeServe = styled.div`
  align-items: center;
  padding: 5rem 3rem;

  span {
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: space-between;
    padding: 0 4rem;
    :nth-child(1) {
      margin-top: 2rem;
    }
    img {
      width: 11px;
      height: 11px;
    }

    @media (min-width: ${({ theme }) => theme.mobile}) {
      padding: 0 8rem;
    }
  }

  div {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(100%, 300px), 1fr));
    text-align: center;
    align-content: center;
    justify-content: center;
    gap: 1rem;

    img {
      max-width: 100%;
      max-height: 100%;
      justify-self: center;
      align-self: center;
    }
  }
`;
