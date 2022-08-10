import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { toast } from "react-toastify";
import { api } from "../services/api";

export type Coffe = {
  id: string;
  image: string;
  title: string;
  subtitle: string;
  tags: Array<String>;
  unityPrice: number;
  amount: number;
};

interface CartContextData {
  cart: Coffe[];
  coffes: Coffe[];
  paymentOptionType: string;
  resetCart: () => void;
  setPaymentOptionType: (value: string) => void;
  addCoffeToCart: (id: string, amount: number) => void;
  removeCoffeFromCart: (id: string) => void;
  increaseCoffeAmount: (id: string) => void;
  decreaseCoffeAmount: (id: string) => void;
}

interface CartProviderProps {
  children: ReactNode;
}

const CartContext = createContext({} as CartContextData);

export function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<Coffe[]>(() => {
    const storedCartJSON = localStorage.getItem("@coffe-delivery:cart");

    if (storedCartJSON) return JSON.parse(storedCartJSON);
    return [];
  });
  const [coffes, setCoffes] = useState<Coffe[]>([]);
  const [paymentOptionType, setPaymentOptionType] = useState("credit");

  useEffect(() => {
    api
      .get("/coffes")
      .then((response) => setCoffes(response.data.coffes))
      .catch((err) => console.log(err));
  }, [cart]);

  async function addCoffeToCart(coffeId: string, amount: number) {
    const selectedCoffe: Coffe | undefined = coffes.find(
      (coffe) => coffe.id === coffeId,
    );
    const selectedCoffeIsAlreadyAtCart = cart.find(
      (coffe) => coffe.id === coffeId,
    );

    if (selectedCoffe && selectedCoffeIsAlreadyAtCart) {
      const newData: Coffe = {
        ...selectedCoffe,
        amount,
      };

      const response = await api.patch(`/coffes/${coffeId}`, newData);
      const updatedCoffe: Coffe = response.data.coffe;

      const updatedCart = cart.map((coffe) => {
        if (coffe.id === updatedCoffe.id) return { ...coffe, amount };
        return coffe;
      });

      setCart(updatedCart);

      const cartJSON = JSON.stringify(updatedCart);
      localStorage.setItem("@coffe-delivery:cart", cartJSON);
    } else if (selectedCoffe) {
      const newData: Coffe = {
        ...selectedCoffe,
        amount,
      };

      const response = await api.patch(`/coffes/${coffeId}`, newData);
      const updatedCoffe: Coffe = response.data.coffe;

      setCart([...cart, updatedCoffe]);

      const cartJSON = JSON.stringify([...cart, updatedCoffe]);
      localStorage.setItem("@coffe-delivery:cart", cartJSON);
    } else {
      toast.error("Falha ao adicionar no carrinho!", {
        theme: "colored",
      });
    }
  }

  async function increaseCoffeAmount(coffeId: string) {
    const selectedCoffe: Coffe | undefined = cart.find(
      (coffe) => coffe.id === coffeId,
    );

    if (selectedCoffe) {
      const newData: Coffe = {
        ...selectedCoffe,
        amount: selectedCoffe?.amount + 1,
      };

      const response = await api.patch(`/coffes/${coffeId}`, newData);
      const updatedCoffe: Coffe = response.data.coffe;

      const updatedCart: Coffe[] = cart.map((coffe) => {
        if (coffe.id === updatedCoffe.id)
          return { ...coffe, amount: updatedCoffe.amount };
        return coffe;
      });

      setCart(updatedCart);

      const cartJSON = JSON.stringify(updatedCart);
      localStorage.setItem("@coffe-delivery:cart", cartJSON);
    }
  }

  async function decreaseCoffeAmount(coffeId: string) {
    const selectedCoffe: Coffe | undefined = cart.find(
      (coffe) => coffe.id === coffeId,
    );

    if (selectedCoffe && selectedCoffe.amount >= 1) {
      const newData: Coffe = {
        ...selectedCoffe,
        amount: selectedCoffe?.amount - 1,
      };

      const response = await api.patch(`/coffes/${coffeId}`, newData);
      const updatedCoffe: Coffe = response.data.coffe;

      const updatedCart: Coffe[] = cart.map((coffe) => {
        if (coffe.id === updatedCoffe.id)
          return { ...coffe, amount: updatedCoffe.amount };
        return coffe;
      });

      setCart(updatedCart);

      const cartJSON = JSON.stringify(updatedCart);
      localStorage.setItem("@coffe-delivery:cart", cartJSON);
    } else removeCoffeFromCart(coffeId);
  }

  async function removeCoffeFromCart(coffeId: string) {
    const selectedCoffe: Coffe | undefined = cart.find(
      (coffe) => coffe.id === coffeId,
    );

    if (selectedCoffe) {
      const updatedCart = cart.filter((coffe) => coffe.id !== coffeId);

      setCart(updatedCart);

      const cartJSON = JSON.stringify(updatedCart);
      localStorage.setItem("@coffe-delivery:cart", cartJSON);
    }
  }

  function resetCart() {
    setCart([]);
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        coffes,
        paymentOptionType,
        resetCart,
        setPaymentOptionType,
        addCoffeToCart,
        removeCoffeFromCart,
        increaseCoffeAmount,
        decreaseCoffeAmount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart(): CartContextData {
  const cartContext = useContext(CartContext);

  return cartContext;
}
