import { Header } from "../../components/Header";
import logoCoffeeDelivery from "../../assets/coffee-delivery-logo.svg";
import { InfoCoffee } from "../../components/InfoCoffee";
import { HomeContainer, TitleCoffeContainer, GroupCart } from "./styles.ts";
// import { Cart, CartProps } from "../../components/Cart";
import { Cart } from "../../components/Cart";
import type { CartProps } from "../../components/Cart";

import tradicionalCoffee from "../../assets/images/type-coffees/american-coffee.png"; // Imagem importada corretamente
// import { Footer } from "../../components/Footer/index.tsx";
import { FooterContainer } from "../../components/Footer/styles.ts";
import { AddressForm } from "../../components/AddressForm/index.tsx";
import { Payment } from "../../components/Payment/index.tsx";

export function Home() {
  const cartMockList: CartProps[] = [
    {
      image: tradicionalCoffee,
      tag: "Tradicional",
      title: "Latte",
      description:
        "Uma dose de café expresso com o dobro de leite e espuma cremosa",
      price: 9.9,
      quantity: 2,
    },
    {
      image: tradicionalCoffee,
      tag: "Tradicional",
      title: "Expresso",
      description: "Café preto forte feito na pressão",
      price: 7.5,
      quantity: 1,
    },
    {
      image: tradicionalCoffee,
      tag: "Tradicional",
      title: "Latte",
      description:
        "Uma dose de café expresso com o dobro de leite e espuma cremosa",
      price: 9.9,
      quantity: 2,
    },
    {
      image: tradicionalCoffee,
      tag: "Tradicional",
      title: "Expresso",
      description: "Café preto forte feito na pressão",
      price: 7.5,
      quantity: 1,
    },
    {
      image: tradicionalCoffee,
      tag: "Tradicional",
      title: "Latte",
      description:
        "Uma dose de café expresso com o dobro de leite e espuma cremosa",
      price: 9.9,
      quantity: 2,
    },
    {
      image: tradicionalCoffee,
      tag: "Tradicional",
      title: "Expresso",
      description: "Café preto forte feito na pressão",
      price: 7.5,
      quantity: 1,
    },
    {
      image: tradicionalCoffee,
      tag: "Tradicional",
      title: "Latte",
      description:
        "Uma dose de café expresso com o dobro de leite e espuma cremosa",
      price: 9.9,
      quantity: 2,
    },
    {
      image: tradicionalCoffee,
      tag: "Tradicional",
      title: "Expresso",
      description: "Café preto forte feito na pressão",
      price: 7.5,
      quantity: 1,
    },
    {
      image: tradicionalCoffee,
      tag: "Tradicional",
      title: "Latte",
      description:
        "Uma dose de café expresso com o dobro de leite e espuma cremosa",
      price: 9.9,
      quantity: 2,
    },
    {
      image: tradicionalCoffee,
      tag: "Tradicional",
      title: "Expresso",
      description: "Café preto forte feito na pressão",
      price: 7.5,
      quantity: 1,
    },
    {
      image: tradicionalCoffee,
      tag: "Tradicional",
      title: "Latte",
      description:
        "Uma dose de café expresso com o dobro de leite e espuma cremosa",
      price: 9.9,
      quantity: 2,
    },
    {
      image: tradicionalCoffee,
      tag: "Tradicional",
      title: "Expresso",
      description: "Café preto forte feito na pressão",
      price: 7.5,
      quantity: 1,
    },
  ];

  async function zipcodeSearch(zipcode: string) {
    const cleanZipcode = zipcode.replace(/\D/g, "");
    if (cleanZipcode.length !== 8) return null;

    try {
      const response = await fetch(
        `https://viacep.com.br/ws/${cleanZipcode}/json/`
      );
      const data = await response.json();
      if (data.erro) return null;

      return {
        rua: data.logradouro,
        bairro: data.bairro,
        cidade: data.localidade,
        uf: data.uf,
      };
    } catch {
      return null;
    }
  }

  return (
    <HomeContainer>
      <Header logo={logoCoffeeDelivery} altLogo="Logo Coffee Delivery" />
      {/* <InfoCoffee /> */}
      {/* <TitleCoffeContainer>Nossos cafés</TitleCoffeContainer>
      <GroupCart>
        {cartMockList.map((item, index) => (
          <Cart key={index} {...item} />
        ))}

      </GroupCart> */}
      <AddressForm onSearchZipcode={zipcodeSearch} />
      <Payment />
      {/* <FooterContainer /> */}
    </HomeContainer>
  );
}
