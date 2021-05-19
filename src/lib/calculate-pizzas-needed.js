export default function calculatePizzasNeeded(
  numberOfPersons,
  slicesPerPerson,
  slicesPerPizza = 8
) {
  return Math.ceil((numberOfPersons * slicesPerPerson) / slicesPerPizza);
}
