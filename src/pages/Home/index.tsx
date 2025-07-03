import { Header } from "../../components/Header";
import logoCoffeeDelivery from "../../assets/coffee-delivery-logo.svg";
import { InfoCoffee } from "../../components/InfoCoffee";
import { HomeContainer, TitleCoffeContainer, GroupCart } from "./styles.ts";
// import { Cart, CartProps } from "../../components/Cart";
import { Cart } from "../../components/Cart";
import type { CartProps } from "../../components/Cart";

import tradicionalCoffee from "../../assets/images/type-coffees/american-coffee.png"; // Imagem importada corretamente
import { Footer } from "../../components/Footer/index.tsx";

export function Home() {
  const cartMockList: CartProps[] = [
    {
      image: tradicionalCoffee,
      tag: "Tradicional",
      title: "Latte",
      description: "Uma dose de café expresso com o dobro de leite e espuma cremosa",
      price: 9.90,
      quantity: 2,
    },
    {
      image: tradicionalCoffee,
      tag: "Tradicional",
      title: "Expresso",
      description: "Café preto forte feito na pressão",
      price: 7.50,
      quantity: 1,
    },
    {
      image: tradicionalCoffee,
      tag: "Tradicional",
      title: "Latte",
      description: "Uma dose de café expresso com o dobro de leite e espuma cremosa",
      price: 9.90,
      quantity: 2,
    },
    {
      image: tradicionalCoffee,
      tag: "Tradicional",
      title: "Expresso",
      description: "Café preto forte feito na pressão",
      price: 7.50,
      quantity: 1,
    },
    {
      image: tradicionalCoffee,
      tag: "Tradicional",
      title: "Latte",
      description: "Uma dose de café expresso com o dobro de leite e espuma cremosa",
      price: 9.90,
      quantity: 2,
    },
    {
      image: tradicionalCoffee,
      tag: "Tradicional",
      title: "Expresso",
      description: "Café preto forte feito na pressão",
      price: 7.50,
      quantity: 1,
    },
    {
      image: tradicionalCoffee,
      tag: "Tradicional",
      title: "Latte",
      description: "Uma dose de café expresso com o dobro de leite e espuma cremosa",
      price: 9.90,
      quantity: 2,
    },
    {
      image: tradicionalCoffee,
      tag: "Tradicional",
      title: "Expresso",
      description: "Café preto forte feito na pressão",
      price: 7.50,
      quantity: 1,
    },
    {
      image: tradicionalCoffee,
      tag: "Tradicional",
      title: "Latte",
      description: "Uma dose de café expresso com o dobro de leite e espuma cremosa",
      price: 9.90,
      quantity: 2,
    },
    {
      image: tradicionalCoffee,
      tag: "Tradicional",
      title: "Expresso",
      description: "Café preto forte feito na pressão",
      price: 7.50,
      quantity: 1,
    },
    {
      image: tradicionalCoffee,
      tag: "Tradicional",
      title: "Latte",
      description: "Uma dose de café expresso com o dobro de leite e espuma cremosa",
      price: 9.90,
      quantity: 2,
    },
    {
      image: tradicionalCoffee,
      tag: "Tradicional",
      title: "Expresso",
      description: "Café preto forte feito na pressão",
      price: 7.50,
      quantity: 1,
    },
  ];

  return (
    <HomeContainer>
      <Header logo={logoCoffeeDelivery} altLogo="Logo Coffee Delivery" />
      <InfoCoffee />
      <TitleCoffeContainer>Nossos cafés</TitleCoffeContainer>
      <GroupCart>
      {cartMockList.map((item, index) => (
        <Cart key={index} {...item} />
      ))}

      </GroupCart>
      <Footer />
    </HomeContainer>
  );
}
