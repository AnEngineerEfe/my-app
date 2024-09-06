import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import './HomePage.css';

const Home = ({ recipes, onRecipeClick }) => {
  return (
    <div id='homer' className="container mt-4">
      <Row>
        {recipes.map(recipe => (
          <Col sm={10} md={3} key={recipe.id} className="mb-4">
            <Card className='card' onClick={() => onRecipeClick(recipe)} style={{ cursor: 'pointer' }}>
              <Card.Img variant="top" src={recipe.image}/>
              <Card.Body>
                <Card.Title>{recipe.name}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <div className='footer'>
        <div className='internal'>
        <h2><u>İletişim</u></h2> <br/>
        <h2>0212 629 88 76</h2>
        </div>
      </div>
    </div>
  );
};

export default Home;
