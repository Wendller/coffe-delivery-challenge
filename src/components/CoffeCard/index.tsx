import { Minus, Plus, ShoppingCartSimple } from "phosphor-react";
import { useState } from "react";
import { toast } from "react-toastify";
import { Coffe, useCart } from "../../hooks/useCart";
import { AmountMenu, CardContainer, CartButton, TagWrapper } from "./styles";

export function CoffeCard({
  id,
  image,
  title,
  subtitle,
  tags,
  unityPrice,
  amount,
}: Coffe) {
  const { addCoffeToCart } = useCart();
  const [coffeAmountValue, setCoffeAmount] = useState<number>(amount);

  function handleAddCoffe() {
    setCoffeAmount((state) => state + 1);
  }

  function handleRemoveCoffe() {
    if (coffeAmountValue >= 1) {
      setCoffeAmount((state) => state - 1);
    }
  }

  function handleAddToCart() {
    if (coffeAmountValue >= 1) {
      addCoffeToCart(id, coffeAmountValue);
      toast.success("Café adicionado ao carrinho!");
    }
  }

  return (
    <CardContainer>
      <img src={image} alt="" />

      <TagWrapper>
        {tags.map((tag, index) => (
          <span key={`${tag}${index}`}>{tag}</span>
        ))}
      </TagWrapper>

      <h3>{title}</h3>
      <p>{subtitle}</p>

      <AmountMenu>
        <p>
          {new Intl.NumberFormat("pt-br", {
            style: "currency",
            currency: "BRL",
          }).format(unityPrice)}
        </p>

        <div>
          <button onClick={handleRemoveCoffe}>
            <Minus size={14} />
          </button>
          <span>{coffeAmountValue}</span>
          <button onClick={handleAddCoffe}>
            <Plus size={14} />
          </button>
        </div>

        <CartButton onClick={handleAddToCart}>
          <ShoppingCartSimple size={20} />
        </CartButton>
      </AmountMenu>
    </CardContainer>
  );
}
