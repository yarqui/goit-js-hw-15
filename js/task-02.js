const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.querySelector("ul#ingredients");

const ingredientsItems = ingredients.map((ingredient) => {
  const item = document.createElement("li");
  item.textContent = ingredient;
  item.classList.add("item");

  return item;
});

// BONUS
const sortedIngredientsAsc = [...ingredientsItems].sort((a, b) =>
  a.textContent.localeCompare(b.textContent)
);

// ingredientsList.append(...ingredientsItems);
ingredientsList.append(...sortedIngredientsAsc);
