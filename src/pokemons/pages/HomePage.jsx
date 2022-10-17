import { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons } from "../../store/pokemonsWithSlice/thunks";
import { Header } from "../components/Header";
import { Pokemon } from "../components/Pokemon";

export const HomePage = () => {
  
  const dispatch = useDispatch();
  const {isLoading,pokemons=[],page} = useSelector(state => state.pokemons);
    
  useEffect(() => {
    dispatch(getPokemons());
  }, [])
  

  return (
    <>
    <Header/>
    <button disabled={isLoading || page===1} onClick={()=>dispatch(getPokemons(page-2))} className='btn btn-outline-danger m-2'>Prev</button>
    <button disabled={isLoading} onClick={()=>dispatch(getPokemons(page))} className='btn btn-outline-success'>Next</button>
      {
        isLoading ? <h1>Cargando ...</h1> :
        <Row className='bg-black'>
          {pokemons?.map(pokemon =>
            <Col key={pokemon.url} xs={12} sm={12} md={4} lg={4} xl={4}>
                <Pokemon name={pokemon.name}/>
            </Col>
          )}
        </Row>
      }
    </>
  );
};
