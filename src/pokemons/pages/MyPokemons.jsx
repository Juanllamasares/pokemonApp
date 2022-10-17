import { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Header } from "../components/Header";
import { PokemonCaptured } from "../components/PokemonCaptured";
export const MyPokemons = () => {

  const { capturedPokemons } = useSelector((state) => state.pokemons);

  return (
    <>
      <Header />

      {capturedPokemons.length > 0 ? (
        <Row className="bg-black">
          {capturedPokemons?.map((pokemon) => (
            <Col key={pokemon} xs={12} sm={12} md={4} lg={4} xl={4}>
              <PokemonCaptured name={pokemon} />
            </Col>
          ))}
        </Row>
      ) : (
        <h1 className="text-center text-primary">No capturaste a ningun Pokemon!</h1>
      )}
    </>
  );
};
