import { MapPinLine } from "phosphor-react"
import { AddressFormContainer } from "./styles"

export function AddressForm() {

  return (
    <AddressFormContainer>
      <div className="wrapper-title-container">
        <MapPinLine size={22} color="#C47F17" />
        <div className="container-title">
          <p className="title">Endereço de Entrega</p>
          <p className="description">Informe o endereço onde deseja receber seu pedido</p>
          <form action="">

          </form>
        </div>
      </div>
    </AddressFormContainer>
  )
}