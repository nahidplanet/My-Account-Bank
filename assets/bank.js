function getInnerTextValue(getInnerID) {
    const getInnerTag =  document.getElementById(getInnerID);
    const getInnerText = getInnerTag.innerText;
    const getInnerValue = parseFloat(getInnerText);
    return getInnerValue;
}
function getInputValue(inputID){
    const inputTag = document.getElementById(inputID);
    const inputText = inputTag.value;
    const inputValues = parseFloat(inputText);
    inputTag.value = "";
    return inputValues;
}
function setInputValue(setInputID,inputValue){
    const setPrevValue = getInnerTextValue(setInputID);
    document.getElementById(setInputID).innerText = setPrevValue + inputValue;
}
function setTotalBalance(fromInput,isAdd) {
    const totalBalanceTag = document.getElementById("total-amount")
    const totalBlanceValue = getInnerTextValue("total-amount");
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
     const totalCurrentBalance = getInnerTextValue("total-amount");
    if (inputValue > 0 && inputValue <= totalCurrentBalance ) {
        setInputValue("withdraw-amount",inputValue);
        setTotalBalance(inputValue,false);
    }
});

