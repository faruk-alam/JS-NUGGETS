// unique value -
// map - get all instances
// new set - get unique instances
// [...new set] - convert set into array

const menu = [
  {
    name: "pancakes",
    category: "breakfast",
  },
  {
    name: "burger",
    category: "lunch",
  },
  {
    name: "steak",
    category: "dinner",
  },
  {
    name: "bacon",
    category: "breakfast",
  },
  {
    name: "eggs",
    category: "breakfast",
  },
  {
    name: "pasta",
    category: "dinner",
  },
  {
    name: "pancakes",
    category: "breakfast",
  }
];
const catagories = [...new Set(menu.map((item) => {
    return item.category;
  }
  ))]; 
console.log(catagories);