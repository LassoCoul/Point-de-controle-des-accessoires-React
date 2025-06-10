// importation des bibliothèques et composants  necessaires
import React from 'react';
import players from './Players';
import Player from './Player';
import {Container, Row, Col} from 'react-bootstrap';

function PlayersList() {
  return (
    <Container>
      <Row>
        {/* boucle sur le tableau 'players' pour recuperer et afficher les elements*/}
        {players.map((player, index) => (
          <Col key={index}>
            {/* utilisation de l'operateur spread */}
            <Player player{...player} />
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default PlayersList;