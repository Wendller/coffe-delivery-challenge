import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import Coffe from "../../assets/coffe-bg.svg";
import { CoffeList } from "./components/CoffeList";
import {
  Benefit,
  BenefitsList,
  HomeContainer,
  TitleSection,
  TitleWrapper,
} from "./styles";

export function Home() {
  return (
    <HomeContainer>
      <TitleSection>
        <div>
          <TitleWrapper>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <h3>
              Com o coffe delivery você recebe o seu café onde estiver, a
              qualquer hora
            </h3>

            <BenefitsList>
              <Benefit circleColor="orange">
                <div>
                  <ShoppingCart size={20} />
                </div>
                <p>Compra simples e segura</p>
              </Benefit>
              <Benefit circleColor="gray">
                <div>
                  <Package size={20} />
                </div>
                <p>Embalagem mantém o café intacto</p>
              </Benefit>
              <Benefit circleColor="yellow">
                <div>
                  <Timer size={20} />
                </div>
                <p>Entrega rápida e rastreada</p>
              </Benefit>
              <Benefit circleColor="purple">
                <div>
                  <Coffee size={20} />
                </div>
                <p>O café chega fresquinho até você</p>
              </Benefit>
            </BenefitsList>
          </TitleWrapper>
          <img src={Coffe} alt="Copo de café" />
        </div>
      </TitleSection>

      <CoffeList />
    </HomeContainer>
  );
}
