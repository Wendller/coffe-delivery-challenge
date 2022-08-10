import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from "phosphor-react";
import { useFormContext } from "react-hook-form";
import { useCart } from "../../../../hooks/useCart";
import {
  FormContainer,
  FormContent,
  FormSubtitle,
  InputWrapper,
  PaymentOption,
  PaymentSelector,
} from "./styles";

export function DeliveryData() {
  const { register } = useFormContext();
  const { paymentOptionType, setPaymentOptionType } = useCart();

  return (
    <FormContainer>
      <h2>Complete seu pedido</h2>
      <FormContent>
        <FormSubtitle iconColor="yellow">
          <MapPinLine size={20} />
          <div>
            <strong>Endereço de Entrega</strong>
            <span>Informe o endereço onde deseja receber seu pedido</span>
          </div>
        </FormSubtitle>
        <InputWrapper>
          <input
            className="zipcode"
            type="text"
            placeholder="CEP"
            {...register("zipcode")}
          />

          <input
            className="street"
            type="text"
            placeholder="Rua"
            {...register("street")}
          />
          <input
            className="number"
            type="text"
            placeholder="Número"
            {...register("number")}
          />
          <input
            className="complement"
            type="text"
            placeholder="Complemento"
            {...register("complement")}
          />
          <input
            className="neighborhood"
            type="text"
            placeholder="Bairro"
            {...register("neighborhood")}
          />
          <input
            className="city"
            type="text"
            placeholder="Cidade"
            {...register("city")}
          />
          <input
            className="state"
            type="text"
            placeholder="UF"
            {...register("state")}
          />
        </InputWrapper>
      </FormContent>

      <FormContent>
        <FormSubtitle iconColor="purple">
          <CurrencyDollar size={20} />
          <div>
            <strong>Pagamento</strong>
            <span>
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </span>
          </div>
        </FormSubtitle>
        <PaymentSelector>
          <PaymentOption
            isOptionActive={paymentOptionType === "credit"}
            type="button"
            onClick={() => setPaymentOptionType("credit")}
          >
            <CreditCard size={20} />
            <span>Cartão de crédito</span>
          </PaymentOption>

          <PaymentOption
            isOptionActive={paymentOptionType === "debit"}
            type="button"
            onClick={() => setPaymentOptionType("debit")}
          >
            <Bank size={20} />
            <span>Cartão de débito</span>
          </PaymentOption>

          <PaymentOption
            isOptionActive={paymentOptionType === "money"}
            type="button"
            onClick={() => setPaymentOptionType("money")}
          >
            <Money size={20} />
            <span>Dinheiro</span>
          </PaymentOption>
        </PaymentSelector>
      </FormContent>
    </FormContainer>
  );
}
