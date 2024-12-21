function printWorld() {
  console.log("Hello World");
}

function ifPrinnt(functio) {
  if (confirm("print Hello World")) {
    functio();
  }
}

ifPrinnt(printWorld);
//2
function guessNumb(num) {
  if (Number(prompt("вгадай число")) === num) {
    console.log("вгадав");
  } else {
    console.log("не вгадав");
    console.log(num);
  }
}

guessNumb(Math.round(Math.random() * (100 - 1) + 1));
//3
function countClic(clic) {
  let total = 0;
  while (clic !== false) {
    total++;
    console.log(clic);
    clic = confirm(" ");
  }
  console.log(total);
}

countClic(confirm(" "));
//4
const applyCallbackToEachElement = (arr, callback) => {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
      result.push(callback(arr[i]));
    }
    return result;
  };
  
  const arr = [1, 2, 3, 4, 5];
  const squareCallback = (num) => num * num;
  
  const result = applyCallbackToEachElement(arr, squareCallback);
  console.log(result); // [1, 4, 9, 16, 25]
//5
const calculateDiscountedPrice = (price,discound,callback) => {
    console.log(showDiscondPrice(price,discound));
}

const showDiscondPrice = (price,discound) =>price-(price/100)*discound;

calculateDiscountedPrice(100,10,showDiscondPrice);