// code
const colors = ["синий", "черный", "зеленый", "красный", "желтый", "зеленый"];

function createColorString() {
  // function isForPizzaParty(item) {
  //     return item === '🍕' || item === '🍺'
  //   }
  return colors
    .filter(
      (item) => item === "черный" || item === "красный" || item === "желтый"
    )
    .join("-");
}

console.log(createColorString());
