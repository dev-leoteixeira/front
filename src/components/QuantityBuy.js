import { useContext, useState } from "react";
import { MyContext } from "../pages/Products";

export default function QuantityBuy(props) {
  const [quantity, setQuantity] = useState(1);
  const [valueButton, setValueButton] = useState(true);
  const product = props.product;
  // Permite acessar o contexto criado na página de produtos
  const setCount = useContext(MyContext);

  // Função para subtrair o valor da quantidade de um produto
  const minus = () => {
    quantity - 1 === 1 ? setValueButton(true) : setValueButton(false);
    if (quantity !== 1) {
      setQuantity(quantity - 1);
    }
  };

  // Função para somar valor da quantidade de um produto
  const plus = () => {
    setValueButton(false);
    setQuantity(quantity + 1);
  };

  // Função para comprar um produto informando o preço final
  const buyProduct = () => {
    if (
      window.confirm(
        `Preço final: ${Math.round(product.price * quantity * 100) / 100}`
      )
    ) {
      alert("Produto comprado com sucesso!");
      setQuantity(1);
      // props.infos.setQtdPedidos(val => val + 1)
      setCount((val) => val + 1);
    }
  };

  return (
    <div className="buttons-product">
      <div className="quantity">
        <span>Quantidade:</span>
        <button disabled={valueButton} className="minus" onClick={minus}>
          -
        </button>
        <span>{quantity}</span>
        <button className="plus" onClick={plus}>
          +
        </button>
      </div>
      <button className="buy" onClick={buyProduct}>
        Comprar
      </button>
    </div>
  );
}
