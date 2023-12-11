/* eslint-disable no-unused-vars */
import { createContext, useEffect, useState } from "react";
import Item from "../components/Item";
import banner from "../assets/banner.jpg";
import { useNavigate } from "react-router"; // Importe o hook useNavigate
import products from "../products.json";

export const MyContext = createContext();

export default function Products() {
  const [productList, setProductList] = useState([]);
  const [qtdPedidos, setQtdPedidos] = useState(0);
  const [count, setCount] = useState(0);

  const navigate = useNavigate(); // Utilize o hook useNavigate para navegação

  useEffect(() => {
    setProductList(products.beauty);
  }, []);

  const handleGoBack = () => {
    navigate("/"); // Navega de volta para a página inicial
  };

  return (
    <div className="content-product">
      <header>
        <div className="user">
          <div>
            Usuário: <span>{count}</span> qtd pedidos{" "}
          </div>
        </div>
      </header>

      <section className="banner">
        <img src={banner} alt="Banner" />
      </section>

      <button className="back" onClick={handleGoBack}>
        Voltar
      </button>

      <section className="main-products">
        <MyContext.Provider value={setCount}>
          {productList.map((p, index) => (
            <Item key={index} product={p} />
          ))}
        </MyContext.Provider>
      </section>
      <footer className="footer">
        <div className="footer-content">
          <h6>Hortfruit Online</h6>
          <p>MVP3 - Desenvolvimento Full-Stack - PUCRJ</p>
        </div>
      </footer>
    </div>
  );
}
