// https://reactrouter.com/en/main/hooks/use-location
// https://reactrouter.com/en/main/hooks/use-params
import { Grid } from "@mui/material";
import { useLocation, useNavigate, useParams } from "react-router";
import SimpleBottomNavigation from "../components/SimpleBottomNavigation";

export default function ProductDetails() {
  // Hook que permite identificar o location, pathname, state do componente.
  // Nesse caso só precisamos do state que foi enviado pelo componente Item com as informações daquele produto escolhido.
  // Mas deixei um console para que vocês possam verificar o objeto retornado.
  let { state } = useLocation();
  console.log(useLocation());

  // De forma geral, dá acesso aos parâmetros passados no path quando chamamos o componente.
  // Nesse caso temos acesso ao id que foi enviado como parâmetro no componente Item.
  let { id } = useParams();

  // Explicado no componente Home
  const navigate = useNavigate();

  return (
    <div className="detailed-content">
      <div>
        <button className="back" onClick={() => navigate("/products")}>
          Voltar
        </button>
        <div>
          <img className="detailed-image" src={state.p.image} alt="" />
        </div>
        <div>
          <h2>
            {state.p.title} - {id}
          </h2>
          <p>{state.p.description}</p>
        </div>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          sx={{ height: 200 }}
        >
          <SimpleBottomNavigation />
        </Grid>
      </div>

      <footer class="footer">
        <div class="footer-content">
          <h6>Hortfruit Online</h6>
          <p>MVP3 - Desenvolvimento Full-Stack - PUCRJ</p>
        </div>
      </footer>
    </div>
  );
}
