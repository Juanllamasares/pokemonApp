import { Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useGetPokemonByNameQuery } from "../../store/pokemonsRTK/pokeApi";
import { capturePokemon } from "../../store/pokemonsWithSlice/thunks";

export const Pokemon = ({ name }) => {
  const { data, error, isLoading } = useGetPokemonByNameQuery(name);

  const dispatch = useDispatch();
  

  if (error) return alert("Algo fallo");

  if (isLoading) return <span>Cargando...</span>;

  return (
    <>
      <Card
        className="my-3 p-3 rounded text-center shadow p-3 mb-5 bg-dark rounded"
        style={{ border: "none" }}
      >
        <Link to={`/pokemon/${data?.id}`}>
          <Card.Img
            className='img-pokemon'
            style={{ width: "8rem"}}
            src={data?.sprites.front_default}
            variant="top"
          />
        </Link>
        <button className='btn btn-outline-danger mb-1' onClick={()=>dispatch(capturePokemon(data?.name))}>Capturar</button>
        <Card.Body
          className={`${data?.types[0].type.name} rounded text-white`}
        >
          <Link to={`/pokemon/${data?.name}`} className="link-name">
            <Card.Title as="div">
              <strong>
                {data?.name.charAt(0).toUpperCase() + data?.name.slice(1)}
              </strong>
            </Card.Title>
          </Link>
        </Card.Body>
      </Card>
    </>
  );
};
