import styled from "styled-components";

export const CartContainer = styled.div`
  width: 100%;
`;

export const CartContent = styled.form`
  width: 100%;
  max-width: 70rem;
  margin: 0 auto;
  padding: 4rem 1rem;

  display: grid;
  grid-template-columns: 58% 38%;
  gap: 2rem;

  @media (max-width: 920px) {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
`;
