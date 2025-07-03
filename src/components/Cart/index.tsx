import { CartContainer } from "./styles.ts";
import { ShoppingCartSimple, Plus, Minus } from "phosphor-react";

// Exportando a interface corretamente
export interface CartProps {
  tag: string;
  title: string;
  description: string;
  image: string;
  price: number;
  quantity: number;
}

export function Cart({ image, tag, title, description, price, quantity }: CartProps) {
  return (
    <div>
      <CartContainer>
        <img className="product-image" src={image} alt={title} />
        <span className="type-product">{tag}</span>
        <span className="title-product">{title}</span>
        <p className="description-product">{description}</p>
        <div className="add-product-container">
          <div className="price-product">
            <span className="simbol-price">R$ </span>
            <span className="price">{price.toFixed(2)}</span>
          </div>
          <div className="quantity-container">
            <button>
              <Minus size={14} color="#8047F8" weight="bold" />
            </button>
            <span className="quantity-product">{quantity}</span>
            <button>
              <Plus size={14} color="#8047F8" weight="bold" />
            </button>
          </div>
          <div className="add-cart">
            <ShoppingCartSimple size={22} weight="fill" color="#F3F2F2" />
          </div>
        </div>
      </CartContainer>
    </div>
  );
}
