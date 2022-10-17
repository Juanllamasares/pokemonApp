import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { useGetPokemonByNameQuery } from "../../store/pokemonsRTK/pokeApi";
import { Header } from "../components/Header";

export const PokemonPage = () => {
  const { id } = useParams();

  const { data, error, isLoading } = useGetPokemonByNameQuery(id);

  if (error) return alert("Algo fallo");

  if (isLoading) return <span>Cargando...</span>;

  return (
    <>
    <Header/>

      {isLoading ? (
        <h1>Cargando...</h1>
      ) : (
        <Row>
          <Col xs={10} sm={10} md={10} lg={10} xl={10} className='m-auto'>
            <Card
              className="my-3 p-3 rounded text-center shadow p-3 mb-5 bg-dark"
              style={{ border: "none" }}
            >
              <Link to={`/pokemon/${data?.id}`}>
                <Card.Img
                  className='img-pokemon'
                  style={{ width: "15rem" }}
                  src={data?.sprites.front_default}
                  variant="top"
                />
              </Link>
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
          </Col>
          <Col xs={12} sm={12} md={12} lg={12} xl={12}>
            <Card
              className="p-3 rounded text-center shadow p-3 mb-5 bg-dark text-white"
              style={{ border: "none" }}
            >
              <Card.Body>
                <Card.Text>
                  <Row>
                    {data?.types.map((t) => (
                      <Col
                        key={t.type.name}
                        className={`${t.type.name} rounded px-4 py-1`}
                        style={{ color: "white" }}
                      >
                        {t.type.name.toUpperCase()}
                      </Col>
                    ))}
                  </Row>
                  <Row>
                    <Col>
                      <Card.Img
                      className='img-pokemon'
                        style={{ width: "15rem" }}
                        src={data?.sprites.front_default}
                      />
                      <Card.Text>Normal Form</Card.Text>
                    </Col>
                    <Col>
                      <Card.Img
                      className='img-pokemon'
                        style={{ width: "15rem" }}
                        src={data?.sprites.front_shiny}
                      />
                      <Card.Text>Shiny Form</Card.Text>
                    </Col>
                  </Row>
                  <Row className="mt-4">
                    <Col
                      xs={12}
                      sm={12}
                      md={12}
                      lg={12}
                      xl={12}
                      className="px-4 py-1 rounded"
                      style={{ border: "1px blue solid" }}
                    >
                      Abilities
                    </Col>
                  </Row>
                  <Row className="text-center">
                    {data?.abilities.map((a) => (
                      <Col
                        key={a.ability.name}
                        xs={6}
                        sm={6}
                        md={6}
                        lg={6}
                        xl={6}
                      >
                        {a.ability.name.toUpperCase()}
                      </Col>
                    ))}
                  </Row>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      )}
    </>
  );
};
