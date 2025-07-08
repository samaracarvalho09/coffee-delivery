import { MapPinLine } from "phosphor-react";
import { AddressFormContainer } from "./styles";
import { useEffect, useRef } from "react";

type AddressFormProps = {
  onSearchZipcode: (zipcode: string) => Promise<{
    rua: string;
    bairro: string;
    cidade: string;
    uf: string;
  } | null>;
};
export function AddressForm({ onSearchZipcode }: AddressFormProps) {
  const ruaRef = useRef<HTMLInputElement>(null);
  const bairroRef = useRef<HTMLInputElement>(null);
  const cidadeRef = useRef<HTMLInputElement>(null);
  const ufRef = useRef<HTMLInputElement>(null);

  async function handleZidecode(e: React.FocusEvent<HTMLInputElement>) {
    const zidecode = e.target.value;
    const data = await onSearchZipcode(zidecode);

    if (data) {
      if (ruaRef.current) ruaRef.current.value = data.rua;
      if (bairroRef.current) bairroRef.current.value = data.bairro;
      if (cidadeRef.current) cidadeRef.current.value = data.cidade;
      if (ufRef.current) ufRef.current.value = data.uf;
    }
  }

  return (
    <AddressFormContainer>
      <div className="wrapper-title-container">
        <MapPinLine size={22} color="#C47F17" />
        <div className="container-title">
          <p className="title">Endereço de Entrega</p>
          <p className="description">
            Informe o endereço onde deseja receber seu pedido
          </p>
        </div>
      </div>
      <form action="">
        <div className="input-container cep-info">
          <input type="number" placeholder="CEP" onBlur={handleZidecode} />
        </div>

        <div className="input-container street-info">
          <input type="text" name="" id="" placeholder="Rua" ref={ruaRef} />
        </div>

        <div className="input-container number-info">
          <input type="number" placeholder="Número" className="number-info" />
        </div>

        <div className="input-container optional-info">
          <input type="text" name="" id="" placeholder="Complemento" />
          <span>Opcional</span>
        </div>

        <div className="input-container neighborhood-info">
          <input
            type="text"
            name=""
            id=""
            placeholder="Bairro"
            ref={bairroRef}
          />
        </div>

        <div className="input-container city-info">
          <input
            type="text"
            name=""
            id=""
            placeholder="Cidade"
            ref={cidadeRef}
          />
        </div>

        <div className="input-container uf-info">
          <input type="text" name="" id="" placeholder="UF" ref={ufRef} />
        </div>
      </form>
    </AddressFormContainer>
  );
}
