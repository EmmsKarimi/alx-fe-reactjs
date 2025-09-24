import { create } from 'zustand';

export const useRecipeStore = create((set) => ({
  recipes: [],

  // Add a recipe
  addRecipe: (newRecipe) =>
    set((state) => ({ recipes: [...state.recipes, newRecipe] })),

  // Update a recipe by id
  updateRecipe: (updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      ),
    })),

  // Delete a recipe by id
  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== id),
    })),

  // Replace entire recipe list (if needed)
  setRecipes: (recipes) => set({ recipes }),
}));
