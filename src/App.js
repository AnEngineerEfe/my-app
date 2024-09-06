import React, { useState , useEffect } from 'react';
import Navbar from './Navbar.js';
import Home from './HomePage.js';
import Detail from './Detail.js';
import axios from 'axios';

function App() {
  const [view, setView] = useState('Home');
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [recipes, setRecipes] = useState([]);

  
  const fetchRecipes = async () => {
   
      const response = await axios.get('https://dummyjson.com/recipes#recipes-all');
      setRecipes(response.data.recipes);
    
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  const handleRecipeClick = (recipe) => {
    axios.get(`https://dummyjson.com/recipes/${recipe.id}`)
    setSelectedRecipe(recipe);
    setView('Detail');
  };

  return (
    <div>
      <Navbar setView={setView} />
      {view === 'Home' && <Home recipes={recipes} onRecipeClick={handleRecipeClick} />}
      {view === 'Detail' && <Detail recipe={selectedRecipe} />}
    </div>
  );
};

export default App;
