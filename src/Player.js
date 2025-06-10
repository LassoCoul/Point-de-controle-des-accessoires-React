
// importation du composant Card de la bibliothèque react-bootstrap
import Card from 'react-bootstrap/Card';

// composant Player qui affiche les informations d'un joueur
// destructuration des props: nom, equipe, nationalite, maillot, age, image)
function Player({nom, equipe, nationalite, maillot, age, image}) {
  return (
    <Card style={{width: '18rem', 
                  margin: '1rem', 
                  padding: '1rem',
                  textAlign: 'center',
                  boxShadow: '1px 5px 5px rgba(37, 13, 156, 0.25)'}}>
      {/* Fixer la hauteur de l'image tout en concervant le ratio de la largeur */}
      <Card.Img src={image} style={{height: '200px', objectFit: 'cover'}} />
      <Card.Body>
        <Card.Title><h2>{nom}</h2></Card.Title>
        <Card.Text>
          <strong>Equipe:</strong> {equipe}<br />
          <strong>Nationalité:</strong> {nationalite}<br />
          <strong>Maillot:</strong> {maillot}<br />
          <strong>Age:</strong> {age}
        </Card.Text>
      </Card.Body>
    </Card>
  );

  // valeurs par défaut des props
  Player.defaultProps = {
    nom: 'Nom de joueur',
    equipe: 'Equipe',
    nationalite: 'Nationalité',
    maillot: 0,
    age: 0,
    image: 'https://www.google.com/'
  };
}

export default Player;