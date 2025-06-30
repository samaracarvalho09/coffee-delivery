import { Header } from "../../components/Header";
import logoCoffeeDelivery from "../../assets/coffee-delivery-logo.svg";
import { InfoCoffee } from "../../components/InfoCoffee";
import {HomeContainer} from "./styles.ts"
import { Cart } from "../../components/Cart/index.tsx";
import tradicionalCoffee from "../../assets/images/type-coffees/american-coffee.png"

export function Home() {
  return (
    <HomeContainer>
      <Header
        logo={logoCoffeeDelivery}
        altLogo="Logo Coffee Delivery"
      />
      <InfoCoffee />
      {/* <Cart 
      image={tradicionalCoffee}

      /> */}

    </HomeContainer>
  )
}