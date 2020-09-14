import React from "react";
import { Col, Image, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  addFavouritePokemon,
  detailPokemon,
} from "../store/actions/PokemonActions";
import "../flip-card.css";
import Swal from "sweetalert2";

function PokemonCard(props) {
  const { pokemon, type } = props;

  const history = useHistory();

  const dispatch = useDispatch();

  const favPage = (data) => {
    dispatch(addFavouritePokemon(data));
    Swal.fire({
      icon: "success",
      title: "Success add to favourite",
    });
  };

  const detailPage = (data) => {
    history.push("/detail");
    dispatch(detailPokemon(data));
  };

  return (
    <>
      {type === "all" && (
        <Col
          lg={3}
          md={4}
          xs={6}
          className="mb-3 d-flex justify-content-around p-0"
        >
          <div className="main-container">
            <div className="the-card">
              <div className="front-card">
                <Image
                  src={pokemon.imageUrlHiRes}
                  style={{ width: "100%", height: "100%" }}
                  rounded
                />
              </div>
              <div className="back-card">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    width: "100%",
                    height: "100%",
                    alignItems: "center",
                    backgroundColor: "#ecf4f3",
                  }}
                >
                  <div>
                    <Button
                      className="mr-2 btn-danger"
                      onClick={() => favPage(pokemon)}
                    >
                      Add Favourite
                    </Button>
                    <Button
                      className="btn-warning"
                      onClick={() => detailPage(pokemon)}
                    >
                      Detail
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Col>
      )}
      {type === "trainer" && pokemon.supertype === "Trainer" && (
        <Col
          xs={6}
          md={6}
          lg={3}
          className="mb-3 d-flex justify-content-around"
        >
          <div className="main-container">
            <div className="the-card">
              <div className="front-card">
                <Image
                  src={pokemon.imageUrlHiRes}
                  style={{ width: "100%", height: "100%" }}
                  rounded
                />
              </div>
              <div className="back-card">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    width: "100%",
                    height: "100%",
                    alignItems: "center",
                    backgroundColor: "#ecf4f3",
                  }}
                >
                  <div>
                    <Button
                      className="mr-2 btn-danger"
                      onClick={() => favPage(pokemon)}
                    >
                      Add Favourite
                    </Button>
                    <Button
                      className="btn-warning"
                      onClick={() => detailPage(pokemon)}
                    >
                      Detail
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Col>
      )}
      {type === "pokemon" && pokemon.supertype === "Pokémon" && (
        <Col
          xs={6}
          md={6}
          lg={3}
          className="mb-3 d-flex justify-content-around"
        >
          <div className="main-container">
            <div className="the-card">
              <div className="front-card">
                <Image
                  src={pokemon.imageUrlHiRes}
                  style={{ width: "100%", height: "100%" }}
                  rounded
                />
              </div>
              <div className="back-card">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    width: "100%",
                    height: "100%",
                    alignItems: "center",
                    backgroundColor: "#ecf4f3",
                  }}
                >
                  <div>
                    <Button
                      className="mr-2 btn-danger"
                      onClick={() => favPage(pokemon)}
                    >
                      Add Favourite
                    </Button>
                    <Button
                      className="btn-warning"
                      onClick={() => detailPage(pokemon)}
                    >
                      Detail
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Col>
      )}
      {type === "energy" && pokemon.supertype === "Energy" && (
        <Col
          xs={6}
          md={6}
          lg={3}
          className="mb-3 d-flex justify-content-around"
        >
          <div className="main-container">
            <div className="the-card">
              <div className="front-card">
                <Image
                  src={pokemon.imageUrlHiRes}
                  style={{ width: "100%", height: "100%" }}
                  rounded
                />
              </div>
              <div className="back-card">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    width: "100%",
                    height: "100%",
                    alignItems: "center",
                    backgroundColor: "#ecf4f3",
                  }}
                >
                  <div>
                    <Button
                      className="mr-2 btn-danger"
                      onClick={() => favPage(pokemon)}
                    >
                      Add Favourite
                    </Button>
                    <Button
                      className="btn-warning"
                      onClick={() => detailPage(pokemon)}
                    >
                      Detail
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Col>
      )}
      {type === "fav" && (
        <Col
          xs={6}
          md={6}
          lg={3}
          className="mb-3 d-flex justify-content-around"
        >
          <Image
            src={pokemon.imageUrlHiRes}
            style={{ width: "300px", height: "450px" }}
            rounded
          />
        </Col>
      )}
    </>
  );
}

export default PokemonCard;
