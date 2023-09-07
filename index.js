const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  },

  {
    id: 3,
    nombre: "pizza Napolitana",
    precio: 1350,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
  },

  {
    id: 4,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
  },

  {
    id: 5,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
  },

  {
    id: 6,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
  },
];
//========================================================================================================================

//Filter me busca todos los elementos del array que cumplan la condicion, en este caso impar
const idImpar = pizzas.filter((elemento) => elemento.id % 2 != 0);
idImpar.forEach((elemento) => {
  console.log(
    `id: ${elemento.id}, Nombre: ${elemento.nombre}, Precio: ${elemento.precio}, Ingredientes: ${elemento.ingredientes}`
  );
});

console.log(
  "======================================================================================================================="
);

//¿Hay alguna pizza menor a $600?
const pizzaBarata = pizzas.filter((numero) => numero.precio < 600);

pizzaBarata.forEach((elemento) => {
  console.log(`La pizza que cuesta menos de $600 es la ${elemento.nombre}`);
});

console.log(
  "======================================================================================================================="
);

//Nombres de las pizzas con su precio

pizzas.forEach((elemento) => {
  console.log(`Nombre: ${elemento.nombre}, Precio $${elemento.precio}`);
});
console.log(
  "======================================================================================================================="
);
//Ingredientes de cada pizza con su nombre

pizzas.forEach((elemento) => {
  console.log(
    `Nombre: ${elemento.nombre}, Ingredientes: ${elemento.ingredientes}`
  );
});
