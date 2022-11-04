const addCounter = (list) => {
  //   list.push(0); // mutating
  //   return list;
  //   return list.concat([0]); // not mutating
  return [...list, 0]; // not mutating
};

const removeCounter = (list, index) => {
  //   list.splice(index, 1); // mutating
  //   return list;
  //   return list.slice(0, index).concat(list.slice(index + 1)); // not mutating
  return [...list.slice(0, index), ...list.slice(index + 1)];
};

const incrementCounter = (list, index) => {
  //   list[index]++; // mutating
  //   return list;
  //   return list
  //     .slice(0, index)
  //     .concat([list[index] + 1])
  //     .concat(list.slice(index + 1)); // not mutating
  return [...list.slice(0, index), list[index] + 1, ...list.slice(index + 1)]; // not mutating
};

const testAddCounter = () => {
  const listBefore = [];
  const listAfter = [0];

  Object.freeze(listBefore);
  expect(addCounter(listBefore)).toEqual(listAfter);
};

const testRemoveCounter = () => {
  const listBefore = [0, 10, 20];
  const listAfter = [0, 20];

  Object.freeze(listBefore);
  expect(removeCounter(listBefore, 1)).toEqual(listAfter);
};

const testIncrementCounter = () => {
  const listBefore = [0, 10, 20];
  const listAfter = [0, 11, 20];

  Object.freeze(listBefore);
  expect(incrementCounter(listBefore, 1)).toEqual(listAfter);
};

testAddCounter();
testRemoveCounter();
testIncrementCounter();

console.log('All tests passed.');
