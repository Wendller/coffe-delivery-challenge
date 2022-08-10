import { Clock, CurrencyDollar, MapPin } from "phosphor-react";
import Delivery from "../../assets/delivery.svg";
import {
  ConfirmationContainer,
  ConfirmationContent,
  DeliveryBox,
  DeliveryItem,
  PinWrapper,
} from "./styles";

export function OrderConfirmation() {
  const currentOrderString =
    localStorage.getItem("@coffe-delivery:order") || "";
  const orderJSON = JSON.parse(currentOrderString);

  return (
    <ConfirmationContainer>
      <ConfirmationContent>
        <h2>Uhu! Pedido confirmado</h2>
        <p>Agora é só aguardar que logo o café chegará até você</p>

        <DeliveryBox>
          <main>
            <DeliveryItem>
              <PinWrapper color="purple">
                <MapPin size={20} />
              </PinWrapper>
              <div>
                <p>
                  Entrega em <strong>{orderJSON.street}</strong>,{" "}
                  <strong>{orderJSON.number}</strong>
                </p>
                <p>
                  {orderJSON.neighborhood} - {orderJSON.city}, {orderJSON.state}
                </p>
              </div>
            </DeliveryItem>

            <DeliveryItem>
              <PinWrapper color="yellow">
                <Clock size={20} />
              </PinWrapper>
              <div>
                <p>Previsão de entrega</p>
                <strong>20min - 30min</strong>
              </div>
            </DeliveryItem>

            <DeliveryItem>
              <PinWrapper color="orange">
                <CurrencyDollar size={20} />
              </PinWrapper>
              <div>
                <p>Pagamento na entrega</p>
                <strong>
                  {orderJSON.paymentOptionType === "credit"
                    ? "Cartão de Crédito"
                    : orderJSON.paymentOptionType === "debit"
                    ? "Cartão de Débito"
                    : "Dinheiro"}
                </strong>
              </div>
            </DeliveryItem>
          </main>

          <img src={Delivery} alt="" />
        </DeliveryBox>
      </ConfirmationContent>
    </ConfirmationContainer>
  );
}
