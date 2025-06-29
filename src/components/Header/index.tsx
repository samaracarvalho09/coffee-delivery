import { MapPin, ShoppingCart } from "phosphor-react";
import { HeaderContainer } from "./styles.ts";

interface HeaderProps {
  logo: string;
  altLogo: string;
}

export function Header({ logo, altLogo }: HeaderProps) {

  return (
    <HeaderContainer>
      <div>
        <img src={logo} alt={altLogo} />
      </div>
      <div className="container-icons">
        <div className="info-location">
          <MapPin size={22} weight="fill" />
          Vila Velha, ES
        </div>
        <div className="info-cart">
          <ShoppingCart size={22} weight="fill" fill="#C47F17" />
          <span className="quantity-products">10</span>
        </div>
      </div>
    </HeaderContainer>
  );
}