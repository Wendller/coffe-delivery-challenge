import styled from "styled-components";
import shadeBackground from "../../assets/home-background.svg";

export const HomeContainer = styled.div`
  width: 100%;
`;

export const TitleSection = styled.section`
  width: 100%;
  height: 34rem;
  background: url(${shadeBackground});

  @media (max-width: 970px) {
    height: 100%;
  }

  & > div {
    max-width: 70rem;
    height: 100%;
    margin: 0 auto;
    padding: 2rem 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;

    @media (max-width: 970px) {
      flex-direction: column;
      gap: 2rem;
    }
  }

  & > div img {
    @media (max-width: 970px) {
      display: none;
    }
  }
`;

export const TitleWrapper = styled.div`
  h1 {
    font-family: "Baloo 2", cursive;
    font-size: 3rem;
    line-height: 3.875rem;
    color: ${(props) => props.theme["base-title"]};
  }

  h3 {
    margin: 2rem 0;
    font-size: 1.25rem;
    font-weight: normal;
    line-height: 1.625rem;
    color: ${(props) => props.theme["base-subtitle"]};
  }
`;

export const BenefitsList = styled.div`
  margin-top: 1rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 1.25rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const BENEFIT_CIRCLE_COLOR = {
  orange: "yellow-dark",
  yellow: "yellow",
  gray: "base-text",
  purple: "purple",
} as const;

type BenefitProps = {
  circleColor: keyof typeof BENEFIT_CIRCLE_COLOR;
};

export const Benefit = styled.div<BenefitProps>`
  display: flex;
  align-items: center;
  gap: 1rem;

  div {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: ${(props) =>
      props.theme[BENEFIT_CIRCLE_COLOR[props.circleColor]]};
    color: ${(props) => props.theme.white};
  }

  p {
    font-size: 1rem;
    font-weight: normal;
    color: ${(props) => props.theme["base-text"]};
  }
`;
