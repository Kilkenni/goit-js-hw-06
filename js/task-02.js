const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingrMarkupArray = [];

ingredients.forEach((ingr) => {
  const newIngredient = document.createElement("li"); //new element
  newIngredient.textContent = ingr;
  newIngredient.classList.add("item"); //adding some class
  ingrMarkupArray.push(newIngredient); //to the array you go
});

document.getElementById("ingredients").append(...ingrMarkupArray); //steamrolling our array and pushing into <ul> in one operation
