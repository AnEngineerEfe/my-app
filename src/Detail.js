import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import './Detail.css';

const Detail = ({ recipe }) => {
  if (!recipe) return null;

  return (
    <div className="container mt-4">
      <Row>
        <Col md={6}>
          <Card className='photo'>
            <Card.Img className='photo' variant="top" src={recipe.image} />
          </Card>
        </Col>
        <Col md={6}>
          <Card className='explanations'>
            <Card.Body>
              <Card.Title><u>{recipe.name}</u></Card.Title> <br/>
              <Card.Text>
                <h5>Ingredients: <br/> <br/> <p className='font'>{recipe.ingredients.map((ingredient, index) => (
                    <div key={index}>{ingredient}</div>
                  ))}</p></h5>
                  <br/>
                
                  
                
                <h5>Instructions: <br/> <br/> <p className='font'>{recipe.instructions}</p></h5>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
      <Col md={12}>
          <Card className='explanationsother'>
            <Card.Body>
              <Card.Title><u>Other Informations</u></Card.Title>
              <Card.Text>
                <br/>
                <h5>PrepTimeMinutes:   {recipe.prepTimeMinutes}</h5>
                <br/>
                <h5>CookTimeMinutes:   {recipe.cookTimeMinutes}</h5>
                <br/>
                <h5>Servings:   {recipe.servings}</h5>
                <br/>
                <h5>Difficulty:   {recipe.difficulty}</h5>
                <br/>
                <h5>Cuisine:   {recipe.cuisine}</h5>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Detail;
