import React from "react";
import { useSelector } from "react-redux";
import { Table, Row, Col, Image } from "react-bootstrap";

function Detail() {
  const detail = useSelector((state) => state.detailPokemons.detail);
  return (
    <Row>
      <Col
        className="mt-4"
        style={{ display: "flex", justifyContent: "space-evenly" }}
      >
        <Image
          src={detail.imageUrlHiRes}
          rounded
          style={{ width: "280px", height: "450px" }}
        />
        {detail.supertype === "Trainer" || detail.supertype === "Energy" ? (
          <Table
            style={{ width: "1000px", textAlign: "center" }}
            striped
            bordered
            hover
          >
            <thead>
              <tr>
                <th style={{ minWidth: "100px" }}>Name</th>
                <th style={{ minWidth: "100px" }}>Number</th>
                <th style={{ minWidth: "100px" }}>Rarity</th>
                <th style={{ minWidth: "100px" }}>Descriptions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{detail.name}</td>
                <td>{detail.number}</td>
                <td>{detail.rarity}</td>
                <td>
                  {detail.text === undefined
                    ? "-"
                    : detail.text.map((x) => <p>{x}</p>)}
                </td>
              </tr>
            </tbody>
          </Table>
        ) : (
          <Table
            style={{ width: "1000px", textAlign: "center" }}
            striped
            bordered
            hover
          >
            <thead>
              <tr>
                <th style={{ minWidth: "100px" }}>Name</th>
                <th style={{ minWidth: "100px" }}>Hp</th>
                <th style={{ minWidth: "100px" }}>Rarity</th>
                <th style={{ minWidth: "200px" }}>Attacks</th>
                <th style={{ minWidth: "200px" }}>Attacks Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{detail.name}</td>
                <td>{detail.hp}</td>
                <td>{detail.rarity === "" ? "-" : detail.rarity}</td>
                <td>
                  {detail.attacks.map((attack) => (
                    <li>{attack.name}</li>
                  ))}
                </td>
                <td>
                  {detail.attacks.map((attack) =>
                    attack.text === "" ? "-" : <li>{attack.text}</li>
                  )}
                </td>
              </tr>
            </tbody>
          </Table>
        )}
      </Col>
    </Row>
  );
}

export default Detail;
