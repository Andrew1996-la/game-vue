function getRandomNumber(num: number) {
  return Math.floor(Math.random() * num);
}

function pickRandomElement(array: string) {
  const index = getRandomNumber(array.length);
  return array[index];
}

export { getRandomNumber, pickRandomElement };
