import styled from "styled-components";

export const HeaderContainer = styled.header`
  max-width: 70rem;
  margin: 0rem auto;
  height: 6.5rem;
  padding: 2rem 1rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  nav {
    height: 100%;
    display: flex;
    align-items: center;
    gap: 0.75rem;

    div {
      height: 100%;
      padding: 0.5rem;
      background: ${(props) => props.theme["purple-light"]};
      color: ${(props) => props.theme["purple-dark"]};
      font-size: 0.875rem;
      border-radius: 6px;

      display: flex;
      align-items: center;
      gap: 0.75rem;

      svg {
        color: ${(props) => props.theme["purple-dark"]};
      }
    }
  }

  nav > div {
    @media (max-width: 400px) {
      display: none;
    }
  }
`;

type CartButtonProps = {
  cartSize: number;
};

export const CartButton = styled.button<CartButtonProps>`
  width: 2.375rem;
  height: 2.375rem;
  padding: 0.5rem;
  border-radius: 6px;
  background: ${(props) => props.theme["yellow-light"]};
  position: relative;

  &::after {
    content: "${(props) => props.cartSize > 0 && props.cartSize}";
    width: 20px;
    height: 20px;
    padding: 0.25rem;
    border-radius: 50%;
    background-color: ${(props) => props.theme["yellow-dark"]};
    color: ${(props) => props.theme.white};
    position: absolute;
    top: -14px;
    right: -14px;

    display: flex;
    align-items: center;
    justify-content: center;

    display: ${(props) =>
      props.cartSize && props.cartSize > 0 ? "inline" : "none"};
  }

  svg {
    color: ${(props) => props.theme["yellow-dark"]};
  }
`;
