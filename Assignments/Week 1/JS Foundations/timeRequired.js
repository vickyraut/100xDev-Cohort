let a = 0;
function calculateSum() {
  for (i = 0; i <= 100000; i++) {
    a = a + i;
  }
}

const beforeDate = new Date();
const beforeTime = beforeDate.getTime();

calculateSum();

const afterDate = new Date();
const afterTime = afterDate.getTime();

console.log(
  "Total time taken by sum function is " +
    (afterTime -
    beforeTime) +
    " milliseconds"
);
