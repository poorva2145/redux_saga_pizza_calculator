import calculatePizzasNeeded from './lib/calculate-pizzas-needed';

const getInitialState = () => {
  const numberOfPersons = 10;
  const slicesPerPerson = 2;
  const numberOfPizzasNeeded = calculatePizzasNeeded(
    numberOfPersons,
    slicesPerPerson
  );

  return {numberOfPersons, slicesPerPerson, numberOfPizzasNeeded};
};

export default getInitialState;