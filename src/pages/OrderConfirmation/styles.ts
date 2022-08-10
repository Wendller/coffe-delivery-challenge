import styled from "styled-components";

export const ConfirmationContainer = styled.div`
  width: 100%;
`;

export const ConfirmationContent = styled.div`
  max-width: 70rem;
  margin: 0 auto;
  padding: 2rem 1rem;

  h2 {
    font-family: "Baloo 2";
    font-weight: bold;
    font-size: 2rem;
    color: ${(props) => props.theme["yellow-dark"]};
  }

  p {
    font-size: 1.125rem;
    font-weight: normal;
  }
`;

export const DeliveryBox = styled.div`
  margin-top: 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  main {
    border: 1px solid ${(props) => props.theme["yellow-dark"]};
    padding: 2rem;
    border-radius: 6px 36px;
  }

  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;

    img {
      width: 80%;
    }
  }
`;

export const DeliveryItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  & + & {
    margin-top: 2rem;
  }

  div p {
    margin-bottom: 0.25rem;
  }
`;

const PIN_COLORS = {
  purple: "purple",
  yellow: "yellow",
  orange: "yellow-dark",
} as const;

type PinWrapperProps = {
  color: keyof typeof PIN_COLORS;
};

export const PinWrapper = styled.div<PinWrapperProps>`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: ${(props) => props.theme[PIN_COLORS[props.color]]};

  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.white};
`;
