function findLargestNumber() {
  const input1 = document.querySelector(".paste3NumbersInput1").value;
  const input2 = document.querySelector(".paste3NumbersInput2").value;
  const input3 = document.querySelector(".paste3NumbersInput3").value;
  const resultSpan = document.querySelector(".paste3NumbersResultSpan");

  if (!isNaN(input1) && !isNaN(input2) && !isNaN(input3)) {
    const largestNumber = Math.max(
      parseFloat(input1),
      parseFloat(input2),
      parseFloat(input3)
    );

    resultSpan.textContent = largestNumber;
  } else {
    resultSpan.textContent = `Найбільше число, яке ви ввели - (число)`;
  }
}
