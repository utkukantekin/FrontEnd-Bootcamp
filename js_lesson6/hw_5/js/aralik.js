let fillArray = function (start, end) {
  let dizi = [];
  for (let i = start; i <= end; i++) {
    dizi.push(i);
  }
  return dizi;
};

let editArr = (diziToEdit = []) => {
  if (diziToEdit.indexOf(7) != -1) {
    diziToEdit.splice(diziToEdit.indexOf(7), 1);
  }
  if (diziToEdit.indexOf(100) != -1) {
    let sliced = diziToEdit.slice(0, diziToEdit.indexOf(100));
    return sliced;
  }
  return diziToEdit;
};

let numInBetween = function (start, end) {
  // without array
  var counter = 0;
  for (let index = start; index <= end; index++) {
    counter++;
  }
  document.writeln(`number of elements between = ${counter} <br/>`);
  return counter;
};

let numInBetweenArr = function (dizi = []) {
  // with array
  return dizi.length;
};

let sum = function (start, end) {
  // without array
  total = 0;
  var total;
  for (let i = start; i <= end; i++) {
    if (i == 7) {
      continue;
    } else if (i == 100) {
      break;
    }
    total += i;
  }
  document.writeln(`sum of numbers = ${total} <br/>`);
  return total;
};

let sumArr = function (dizi = []) {
  // with array
  return dizi.reduce((pSum, element) => pSum + element, 0);
};

let oddNums = function (start, end) {
  //without array
  var sum = 0;
  var counter = 0;
  document.writeln(`odd numbers =`);
  for (let i = start; i <= end; i++) {
    if (i % 2 == 1) {
      document.writeln(`${i}, `);
      counter++;
      sum += i;
    }
  }
  document.writeln(`<br/>number of odd numbers = ${counter}`);
  document.writeln(`<br/>sum of odd numbers = ${sum}`);
};

let oddNumsArr = function (dizi = []) {
  //with array
  return dizi.filter((element) => element % 2 == 1);
};

let evenNums = function (start, end) {
  //without array
  var counter = 0;
  var sum = 0;
  document.writeln(`even numbers =`);
  for (let i = start; i <= end; i++) {
    if (i % 2 == 0) {
      document.writeln(`${i}, `);
      counter++;
      sum += i;
    }
  }
  document.writeln(`<br/>number of even numbers = ${counter}`);
  document.writeln(`<br/>sum of even numbers = ${sum}`);
  return counter;
};

let evenNumsArr = function (dizi = []) {
  //with array
  return dizi.filter((element) => element % 2 == 0);
};

let aralik = function () {
  while (true) {
    var start = Number(prompt("Please Enter Start Value"));
    var end = Number(prompt("Please Enter End Value"));
    if (start == 44 || end == 44) {
      return false;
    }
    if (end > start) {
      break;
    } else {
      alert("Please enter the end value greater than the start value");
    }
  }
  let dizi = fillArray(start, end);
  const clone = JSON.parse(JSON.stringify(dizi)); // dizinden 7'i çıkarttığımda orjinal dizinin değişmesini
  // istediğim için clone oluşturdum.
  let diziEdited = editArr(clone); // toplama işleminde 7 ve yüzden sonrasını atmak için

  numInBetween(start, end);
  document.writeln(
    `number of elements between with array = ${numInBetweenArr(dizi)} <br/>`
  );

  sum(start, end);
  document.writeln(`sum of elements array = ${sumArr(diziEdited)} <br/>`);

  oddNums(start, end);
  document.writeln(`<br/>odd numbers with array = ${oddNumsArr(dizi)} <br/>`);
  document.writeln(
    `number of odd numbers with array = ${numInBetweenArr(
      oddNumsArr(dizi)
    )} <br/>`
  );
  document.writeln(
    `sum of odd numbers with array = ${sumArr(oddNumsArr(dizi))} <br/>`
  );

  evenNums(start, end);
  document.writeln(`<br/>even numbers with array = ${evenNumsArr(dizi)} <br/>`);
  document.writeln(
    `number of even numbers with array = ${numInBetweenArr(
      evenNumsArr(dizi)
    )} <br/>`
  );
  document.writeln(
    `sum of even numbers with array = ${sumArr(evenNumsArr(dizi))} <br/>`
  );

  return true;
};

aralik();
