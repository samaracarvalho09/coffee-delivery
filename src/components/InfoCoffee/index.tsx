import { ShoppingCart } from "phosphor-react";
import { InfoCoffeeContainer, TextCoffee } from "./styles.ts";
import CoffeeImagem from "../../assets/images/slide-coffee-image.png"



export function InfoCoffee() {

  return (
    <InfoCoffeeContainer>
      <div className="container-left">
        <div className="text-container">
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p className="description-coffee-store">
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
        </div>
        <div className="info-slide">
          <div>
            <TextCoffee bgColor="#C47F17">
              <div className="container-icon">
                <ShoppingCart size={16} weight="fill" fill="#FFF" />
              </div>
              <p>Compra simples e segura</p>
            </TextCoffee>

            <TextCoffee bgColor="#574F4D">
              <div className="container-icon">
                <ShoppingCart size={16} weight="fill" fill="#FFF" />
              </div>
              <p>Embalagem mantém o café intacto</p>
            </TextCoffee>
          </div>
          <div>
            <TextCoffee bgColor="#DBAC2C">
              <div className="container-icon">
                <ShoppingCart size={16} weight="fill" fill="#FFF" />
              </div>
              <p>Entrega rápida e rastreada</p>
            </TextCoffee>
            <TextCoffee bgColor="#8047F8">
              <div className="container-icon">
                <ShoppingCart size={16} weight="fill" fill="#FFF" />
              </div>
              <p>O café chega fresquinho até você</p>
            </TextCoffee>
          </div>
        </div>
      </div>
      <div className="container-right">
        <img src={CoffeeImagem} alt="" />
      </div>
    </InfoCoffeeContainer>
  );
}