import styled from "styled-components";

export const FormContainer = styled.div`
  width: 100%;

  h2 {
    font-family: "Baloo 2";
    font-size: 1.125rem;
    font-weight: 700;
    color: ${(props) => props.theme["base-subtitle"]};
    margin: 2rem 0;
  }
`;

export const FormContent = styled.div`
  margin: 1rem 0;
  padding: 2.5rem;
  background: ${(props) => props.theme["base-card"]};
  border-radius: 6px;
`;

const ICONS_COLORS = {
  purple: "purple-dark",
  yellow: "yellow-dark",
} as const;

type SubtitleProps = {
  iconColor: keyof typeof ICONS_COLORS;
};

export const FormSubtitle = styled.div<SubtitleProps>`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;

  svg {
    color: ${(props) => props.theme[ICONS_COLORS[props.iconColor]]};
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    strong {
      font-family: "Roboto", sans-serif;
      font-weight: bold;
      font-size: 1rem;
      color: ${(props) => props.theme["base-subtitle"]};
    }

    span {
      font-family: "Roboto", sans-serif;
      font-size: 0.875rem;
      font-weight: normal;
      color: ${(props) => props.theme["base-text"]};
    }
  }
`;

export const InputWrapper = styled.div`
  margin-top: 2rem;

  display: grid;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  grid-template-columns: 38% 48% 8%;
  grid-template-rows: repeat(4, 1fr);
  grid-template-areas:
    "zc . ."
    "st st st"
    "nb cp cp"
    "nh ct s";

  @media (max-width: 520px) {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    input {
      width: 100%;
    }
  }

  input {
    font-weight: normal;
    padding: 0.75rem;
    background-color: ${(props) => props.theme["base-button"]};
    border-radius: 6px;
    color: ${(props) => props.theme["base-text"]};

    &.zipcode {
      grid-area: zc;
    }
    &.street {
      grid-area: st;
    }
    &.number {
      grid-area: nb;
    }
    &.complement {
      grid-area: cp;
    }
    &.neighborhood {
      grid-area: nh;
    }
    &.city {
      grid-area: ct;
    }
    &.state {
      grid-area: s;
    }
  }
`;

export const PaymentSelector = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-top: 2rem;

  @media (max-width: 520px) {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;

type PaymentOptionProps = {
  isOptionActive: boolean;
};

export const PaymentOption = styled.button<PaymentOptionProps>`
  font-size: 0.7rem;
  text-transform: uppercase;
  padding: 1rem;
  border-radius: 6px;
  background-color: ${(props) => props.theme["base-button"]};
  cursor: pointer;
  border: ${(props) => props.isOptionActive && "1px solid #4B2995"};

  display: flex;
  align-items: center;
  gap: 0.5rem;

  svg {
    color: ${(props) => props.theme["purple-dark"]};
  }

  span {
    font-weight: normal;
    color: ${(props) => props.theme["base-text"]};
  }
`;
