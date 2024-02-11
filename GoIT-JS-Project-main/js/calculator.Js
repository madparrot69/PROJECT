const a = document.querySelector('.calculatorNumber1');
const b = document.querySelector('.calculatorNumber2');

const product = document.querySelector('.calculatorAddition');
const subtraction = document.querySelector('.calculatorDifference');
const multiplication = document.querySelector('.calculatorProduct');
const division = document.querySelector('.calculatorDenominator');

let result = document.querySelector('.calculatorResult');



product.addEventListener(`click`, function(){
    const val1 = a.value;
    const val2 = b.value;

    const sum = +val1 + +val2;
    
    if (Number.isInteger(sum)) {
        result.textContent = sum;
      } else {
        result.textContent = sum.toFixed(2);
      }
    
})

subtraction.addEventListener(`click`, function(){
    const val1 = a.value;
    const val2 = b.value;
    
    const addtn = +val1 - +val2;

    if (Number.isInteger(addtn)) {
        result.textContent = addtn;
      } else {
        result.textContent = addtn.toFixed(2);
      }

})

multiplication.addEventListener(`click`, function(){
    const val1 = a.value;
    const val2 = b.value;

    const mltplctn = +val1 * +val2;

    if (Number.isInteger(mltplctn)) {
            result.textContent = mltplctn;
        } else {
            result.textContent = mltplctn.toFixed(2);
        }
    
})

division.addEventListener(`click`, function(){
    const val1 = a.value;
    const val2 = b.value;

    const dvsn = +val1 / +val2;
    
    if (Number.isInteger(dvsn)) {
        result.textContent = dvsn;
    } else if (+val2 === 0 || "") {
        result.textContent = "На 0 не ділять!";
    }else {
        result.textContent = dvsn.toFixed(2);
    }

})

a.addEventListener(`click`, function(){
    
})

