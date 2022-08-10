import { Minus, Plus, Trash } from "phosphor-react";
import { Coffe, useCart } from "../../../../hooks/useCart";
import {
  TotalPrice,
  CoffeSummary,
  SummaryContainer,
  SummaryContent,
  TotalItens,
  QuantityMenu,
  RemoveButton,
} from "./styles";

export function CartSummary() {
  const {
    cart,
    increaseCoffeAmount,
    decreaseCoffeAmount,
    removeCoffeFromCart,
  } = useCart();

  const totalPrice = cart.reduce(
    (total, coffe: Coffe) => total + coffe.unityPrice * coffe.amount,
    0,
  );

  const deliveryCost = 3.5;

  return (
    <SummaryContainer>
      <h2>Cafés selecionados</h2>

      <SummaryContent>
        {cart.map((coffe) => (
          <CoffeSummary key={coffe.id}>
            <img src={coffe.image} alt="" />
            <div>
              <p>{coffe.title}</p>
              <div>
                <QuantityMenu>
                  <button
                    type="button"
                    onClick={() => decreaseCoffeAmount(coffe.id)}
                  >
                    <Minus size={14} />
                  </button>
                  <span>{coffe.amount}</span>
                  <button
                    type="button"
                    onClick={() => increaseCoffeAmount(coffe.id)}
                  >
                    <Plus size={14} />
                  </button>
                </QuantityMenu>
                <RemoveButton onClick={() => removeCoffeFromCart(coffe.id)}>
                  <Trash size={14} />
                  Remover
                </RemoveButton>
              </div>
            </div>
            <strong>
              {new Intl.NumberFormat("pt-br", {
                style: "currency",
                currency: "BRL",
              }).format(coffe.unityPrice * coffe.amount)}
            </strong>
          </CoffeSummary>
        ))}

        <TotalItens>
          <p>Total de itens</p>
          <p>
            {new Intl.NumberFormat("pt-br", {
              style: "currency",
              currency: "BRL",
            }).format(totalPrice)}
          </p>
        </TotalItens>
        <TotalItens>
          <p>Entrega</p>
          <p>R$ 3,50</p>
        </TotalItens>
        <TotalPrice>
          <strong>Total de itens</strong>
          <strong>
            {new Intl.NumberFormat("pt-br", {
              style: "currency",
              currency: "BRL",
            }).format(totalPrice + deliveryCost)}
          </strong>
        </TotalPrice>

        <button type="submit">Confirmar pedido</button>
      </SummaryContent>
    </SummaryContainer>
  );
}
