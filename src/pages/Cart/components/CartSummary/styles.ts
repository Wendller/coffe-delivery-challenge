import styled from "styled-components";

export const SummaryContainer = styled.div`
  width: 100%;

  h2 {
    font-family: "Baloo 2";
    font-size: 1.125rem;
    font-weight: 700;
    color: ${(props) => props.theme["base-subtitle"]};
    margin: 2rem 0;
  }
`;

export const SummaryContent = styled.div`
  margin: 1rem 0;
  padding: 2.5rem;
  background: ${(props) => props.theme["base-card"]};
  border-radius: 6px 44px;

  button[type="submit"] {
    margin-top: 1rem;
    width: 100%;
    background: ${(props) => props.theme.yellow};
    color: ${(props) => props.theme.white};
    font-weight: bold;
    padding: 1.125rem 0.5rem;
    border-radius: 6px;
    text-transform: uppercase;
    transition: background 0.1s;

    &:hover {
      background: ${(props) => props.theme["yellow-dark"]};
    }
  }
`;

export const SummaryValue = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1rem 0;
`;

export const TotalItens = styled(SummaryValue)`
  font-size: 0.875rem;
  font-weight: normal;
  color: ${(props) => props.theme["base-text"]};
`;

export const TotalPrice = styled(SummaryValue)`
  font-size: 1.25rem;
  font-weight: bold;
  color: ${(props) => props.theme["base-subtitle"]};
`;

export const CoffeSummary = styled.div`
  padding: 1rem 0;
  border-bottom: 1px solid ${(props) => props.theme["base-button"]};
  display: flex;
  align-items: center;
  gap: 1rem;

  img {
    width: 4rem;
    height: 4rem;
  }

  & > div {
    display: flex;
    flex-direction: column;

    p {
      font-size: 1rem;
      font-weight: normal;
      color: ${(props) => props.theme["base-subtitle"]};
      margin-bottom: 0.5rem;
    }
  }

  div {
    display: flex;
    align-items: center;
  }

  strong {
    margin-left: auto;
  }
`;

export const QuantityMenu = styled.div`
  height: 100%;
  margin-right: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.5rem;
  border-radius: 6px;
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
`;

export const RemoveButton = styled.button`
  height: 100%;
  padding: 0.5rem;
  border-radius: 6px;
  background-color: ${(props) => props.theme["base-button"]};
  color: ${(props) => props.theme["base-text"]};
  font-size: 0.7rem;
  font-weight: normal;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  gap: 0.25rem;

  svg {
    color: ${(props) => props.theme["purple-dark"]};
  }
`;
