import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch("/src/data.json")
      .then((res) => res.json())
      .then((data) => {
        const selectedRecipe = data.find((item) => item.id === parseInt(id));
        setRecipe(selectedRecipe);
      })
      .catch((err) => console.error("Error fetching recipe details:", err));
  }, [id]);

  if (!recipe) {
    return <p className="text-center text-gray-600 mt-10">Loading...</p>;
  }

  // Example ingredients and steps (mock for demo purposes)
  const ingredients = [
    "2 cups flour",
    "1 tsp salt",
    "2 eggs",
    "1/2 cup milk",
  ];

  const steps = [
    "Mix all ingredients in a bowl.",
    "Knead the dough for 10 minutes.",
    "Cook on medium heat until golden brown.",
  ];

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <Link
        to="/"
        className="text-blue-600 font-medium hover:underline mb-4 inline-block"
      >
        ← Back to Home
      </Link>

      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            {recipe.title}
          </h1>
          <p className="text-gray-600 mb-6">{recipe.summary}</p>

          <h2 className="text-2xl font-semibold text-gray-700 mb-3">
            Ingredients
          </h2>
          <ul className="list-disc pl-6 mb-6 text-gray-600">
            {ingredients.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <h2 className="text-2xl font-semibold text-gray-700 mb-3">
            Instructions
          </h2>
          <ol className="list-decimal pl-6 text-gray-600 space-y-2">
            {steps.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
