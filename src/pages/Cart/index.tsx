import { CartSummary } from "./components/CartSummary";
import { DeliveryData } from "./components/DeliveryData";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { CartContainer, CartContent } from "./styles";
import { toast } from "react-toastify";
import { Coffe, useCart } from "../../hooks/useCart";
import { useNavigate } from "react-router-dom";

const deliveryFormValidationSchema = yup.object({
  zipcode: yup.string().required("Informe seu CEP"),
  street: yup.string().required("Informe a rua"),
  number: yup.string().required("Informe o número"),
  neighborhood: yup.string().required("Informe seu bairro"),
  city: yup.string().required("Informe sua cidade"),
  state: yup.string().required("Informe seu estado"),
});

export function Cart() {
  const navigate = useNavigate();
  const { cart, paymentOptionType, resetCart } = useCart();
  const totalPrice = cart.reduce(
    (total, coffe: Coffe) => total + coffe.unityPrice * coffe.amount,
    0,
  );

  const deliveryForm = useForm({
    resolver: yupResolver(deliveryFormValidationSchema),
  });

  const { handleSubmit } = deliveryForm;

  function handleCreateOrder(data: object) {
    const orderJSON = { ...data, paymentType: paymentOptionType, totalPrice };
    localStorage.setItem("@coffe-delivery:order", JSON.stringify(orderJSON));

    resetCart();
    toast.success("Pedido enviado com sucesso!");
    navigate("/confirmation");
  }

  return (
    <CartContainer>
      <CartContent onSubmit={handleSubmit(handleCreateOrder)}>
        <FormProvider {...deliveryForm}>
          <DeliveryData />
          <CartSummary />
        </FormProvider>
      </CartContent>
    </CartContainer>
  );
}
