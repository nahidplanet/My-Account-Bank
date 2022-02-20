
function getInputValue(inputID){
    const inputTag = document.getElementById(inputID);
    const inputText = inputTag.value;
    const inputValues = parseFloat(inputText);
    inputTag.value = "";
    return inputValues;
}
function setInputValue(setInputID,inputValue){
    const setField = document.getElementById(setInputID);
    const setPrevText = setField.innerText;
    const setPrevValue = parseFloat(setPrevText);
    setField.innerText = setPrevValue + inputValue;
}
function setTotalBalance(fromInput,isAdd) {
   const totalBalanceTag =  document.getElementById("total-amount");
   const totalBlanceText = totalBalanceTag.innerText;
   const totalBlanceValue = parseFloat(totalBlanceText);
    if (isAdd == true) {
        totalBalanceTag.innerText = totalBlanceValue + fromInput;
    }
    else{
        totalBalanceTag.innerText = totalBlanceValue - fromInput;

    }
}

document.getElementById("depo-button").addEventListener("click",function () {
    const inputValue =  getInputValue("depo-input");
    if (inputValue > 0) {
        setInputValue("deposit-amount",inputValue);
        setTotalBalance(inputValue,true)
    }
});
document.getElementById("withdraw-button").addEventListener("click",function () {
    const inputValue =  getInputValue("with-input");
    if (inputValue > 0) {
        setInputValue("withdraw-amount",inputValue);
        setTotalBalance(inputValue,false);
    }
});

// function getInputValue(fieldId) {
//     const inputField = document.getElementById(fieldId);
//     const valueInText = inputField.value;
//     const value = parseFloat(valueInText);
//     inputField.value = '';
//     return value;
// }
// function getInnerTextValue(fieldId) {
//     const fieldTag = document.getElementById(fieldId);
//     const fieldValueInText = fieldTag.innerText;
//     const value = parseFloat(fieldValueInText);
//     return value;
// }
// function updateTotal(fieldId, amount) {
//     const previousTotal = getInnerTextValue(fieldId);
//     const newTotal = previousTotal + amount;
//     document.getElementById(fieldId).innerText = newTotal;
//     return newTotal;
// }
// function updateBalance(amount, isAdding) {
//     const previousBalance = getInnerTextValue('balance-total');
//     let newBalance;
//     if (isAdding == true) {
//         newBalance = previousBalance + amount;
//     }
//     else {
//         newBalance = previousBalance - amount;
//     }
//     document.getElementById('balance-total').innerText = newBalance;
// }
// document.getElementById('deposit-button').addEventListener('click', function () {
//     const amount = getInputValue('deposit-input');
//     if (amount > 0) {
//         updateTotal('deposit-total', amount);
//         updateBalance(amount, true);
//     }
// });

// // handle withdraw
// document.getElementById('withdraw-button').addEventListener('click', function () {
//     const amount = getInputValue('withdraw-input');
//     const balance = getInnerTextValue('balance-total');
//     if (amount > 0 && amount <= balance) {
//         updateTotal('withdraw-total', amount);
//         updateBalance(amount, false)
//     }
// })