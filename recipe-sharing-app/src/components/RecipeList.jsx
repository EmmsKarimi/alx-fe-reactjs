import { Link } from 'react-router-dom';
import useRecipeStore from '../store/recipeStore';

const RecipeList = () => {
  const { recipes, filteredRecipes, searchTerm } = useRecipeStore((state) => ({
    recipes: state.recipes,
    filteredRecipes: state.filteredRecipes,
    searchTerm: state.searchTerm,
  }));

  // decide what to render
  const displayedRecipes =
    searchTerm.trim() !== '' ? filteredRecipes : recipes;

  return (
    <div>
      <h2>Recipes</h2>
      {displayedRecipes.length === 0 ? (
        <p>No recipes found.</p>
      ) : (
        displayedRecipes.map((recipe) => (
          <div key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
            <Link to={`/recipes/${recipe.id}`}>View Details</Link>
          </div>
        ))
      )}
    </div>
  );
};

export default RecipeList;
