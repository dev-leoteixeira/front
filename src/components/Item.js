import { Link } from "react-router-dom";
import QuantityBuy from "./QuantityBuy";

export default function Item(props) {
  const product = props.product;
  // const product = props.infos.product
  // const setCount = useContext(MyContext)

  return (
    <article className="product">
      <img src={product.image} alt="product" />
      {/* <Link> é usado para criar links que levam a diferentes rotas da aplicação.
            Ele recebe uma prop 'to' que indica o caminho do link e
            nesse caso estamos passando os dados de produto para o caminho indicado no 'to' via a prop 'state'. 
            Obs.: Ele é útil para criar links de navegação simples, como links em menus ou barras de navegação.  */}
      <Link to={`/products/${product.id}`} state={{ p: product }}>
        <p className="name-product">{product.title}</p>
      </Link>

      <h3 className="price-product">
        R$ <span>{product.price}</span>
      </h3>

      <QuantityBuy product={props.product} />
    </article>
  );
}
