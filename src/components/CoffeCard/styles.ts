import styled from "styled-components";

export const CardContainer = styled.li`
  list-style: none;
  width: 100%;
  height: 19rem;
  padding: 1.5rem;
  background-color: ${(props) => props.theme["base-card"]};
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 6px 36px;

  img {
    width: 7.5rem;
    height: 7.5rem;
    margin-top: calc(0px - 3.75rem);
  }

  h3 {
    font-size: 1.25rem;
    font-family: "Baloo 2", cursive;
    color: ${(props) => props.theme["base-subtitle"]};
  }

  p {
    font-family: "Roboto", sans-serif;
    font-size: 0.875rem;
    text-align: center;
    color: ${(props) => props.theme["base-label"]};
  }
`;

export const TagWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 0.8rem 0;

  span {
    background-color: ${(props) => props.theme["yellow-light"]};
    color: ${(props) => props.theme.yellow};
    padding: 0.25rem 0.5rem;
    border-radius: 6px;
    font-size: 0.625rem;
    font-weight: bold;
    text-transform: uppercase;
  }
`;

export const AmountMenu = styled.div`
  width: 100%;
  margin-top: auto;
  display: flex;
  align-items: center;

  p {
    margin-right: auto;
    font-size: 1.25rem;
    font-family: "Baloo 2", cursive;
    color: ${(props) => props.theme["base-text"]};
  }

  div {
    height: 2.875rem;
    margin-right: 0.5rem;
    display: flex;
    align-items: center;
    gap: 0.25rem;
    padding: 0.8rem;
    border-radius: 8px;
    background-color: ${(props) => props.theme["purple-light"]};

    button {
      background-color: inherit;
      color: ${(props) => props.theme.purple};

      &:hover {
        color: ${(props) => props.theme["purple-dark"]};
      }
    }

    span {
      color: ${(props) => props.theme["base-title"]};
      flex: 1;
    }
  }
`;

export const CartButton = styled.button`
  width: 2.875rem;
  height: 100%;
  border-radius: 6px;
  background-color: ${(props) => props.theme["purple-dark"]};
  color: ${(props) => props.theme.white};
  transition: background-color 0.1s;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: ${(props) => props.theme.purple};
  }
`;
