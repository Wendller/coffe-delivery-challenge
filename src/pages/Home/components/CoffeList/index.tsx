import { CoffeListContainer, CoffeListContent } from "./styles";
import { CoffeCard } from "../../../../components/CoffeCard";
import { useCart } from "../../../../hooks/useCart";

export function CoffeList() {
  const { coffes } = useCart();

  return (
    <CoffeListContainer>
      <CoffeListContent>
        <h2>Nossos cafés</h2>

        <ul>
          {coffes.map((coffe) => (
            <CoffeCard
              key={coffe.id}
              id={coffe.id}
              image={coffe.image}
              title={coffe.title}
              subtitle={coffe.subtitle}
              tags={coffe.tags}
              unityPrice={coffe.unityPrice}
              amount={coffe.amount}
            />
          ))}
        </ul>
      </CoffeListContent>
    </CoffeListContainer>
  );
}
