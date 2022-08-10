import { MapPin, ShoppingCart } from "phosphor-react";
import { CartButton, HeaderContainer } from "./styles";
import Logo from "../../assets/logo.svg";
import { Coffe, useCart } from "../../hooks/useCart";
import { NavLink } from "react-router-dom";

export function Header() {
  const { cart } = useCart();
  const cartAmount = cart.reduce(
    (amount: number, coffe: Coffe) => amount + coffe.amount,
    0,
  );
  const currentOrderString =
    localStorage.getItem("@coffe-delivery:order") || "";
  const orderJSON = JSON.parse(currentOrderString);

  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={Logo} alt="" />
      </NavLink>
      <nav>
        <div>
          <MapPin size={20} />
          <span>
            {orderJSON.city}, {orderJSON.state}
          </span>
        </div>

        <NavLink to="/cart">
          <CartButton cartSize={cartAmount}>
            <ShoppingCart size={20} />
          </CartButton>
        </NavLink>
      </nav>
    </HeaderContainer>
  );
}
