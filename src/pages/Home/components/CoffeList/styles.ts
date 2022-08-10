import styled from "styled-components";

export const CoffeListContainer = styled.section`
  width: 100%;
`;

export const CoffeListContent = styled.div`
  max-width: 70rem;
  margin: 0 auto;
  padding: 2rem 1rem;

  h2 {
    font-family: "Baloo 2", cursive;
    font-weight: bold;
    font-size: 2rem;
    color: ${(props) => props.theme["base-subtitle"]};
    margin: 3.375rem 0;
  }

  ul {
    margin-top: 2rem;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(16rem, 1fr));
    grid-column-gap: 1.2rem;
    grid-row-gap: 5rem;
  }
`;
