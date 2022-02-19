// function for  id value 
function getValue(id) {
    var Id = document.getElementById(id);
    var idValue = Id.value;
    Id.value = '';

    return idValue;


}


// calculate button 
document.getElementById('calculate-button').addEventListener('click', function () {
    // getting value from id
    var foodCost = getValue('food-cost');
    var rentCost = getValue('rent-cost');
    var pocketCost = getValue('pocket-cost');
    // expence handaling
    if (foodCost && rentCost && pocketCost > 0) {
        var totalExpenceText = document.getElementById('total-expence').innerText;
        var totalEpenceValue = parseFloat(totalExpenceText)
        var expenceTotal = parseFloat(foodCost) + parseFloat(rentCost) + parseFloat(pocketCost) + parseFloat(totalEpenceValue);

        // balance handaling
        var incomeAmount = getValue('income-amount');
        // var balanceAmountText = document.getElementById('balance-amount').innerText;
        // var balanceAmount = parseFloat(balanceAmountText);
        if (incomeAmount > expenceTotal) {
            document.getElementById('total-expence').innerText = expenceTotal;/** to display total expence */
            var totalBalance = incomeAmount - expenceTotal;
            document.getElementById('balance-amount').innerText = totalBalance;
        }
        else {
            alert('Expance amount can not larger then income amount,Put again Valid data ');
        }
    }
    else {
        alert('You have to put valid data in Income, Food , Rent And Cost  , Put again valid data');
    }


})
// save button handaler 
document.getElementById('save-button').addEventListener('click', function () {
    var saveInput = getValue('save-input');
    // percent calculating
    var balanceText = document.getElementById('balance-amount').innerText;
    var balanceValue = parseFloat(balanceText);
    var sum = saveInput * balanceValue; /*this is the first step of percent calculating*/
    var parcentCalculate = sum / 100;
    // saving amount calculating
    var savingAmountText = document.getElementById('saving-amount').innerText;
    var savingAmount = parseFloat(savingAmountText);
    if (saveInput <= 100 && saveInput > 0) {
        document.getElementById('saving-amount').innerText = parcentCalculate;

        // reamaining balance calculate 

        var calculateRemainingBalance = balanceValue - parcentCalculate;
        document.getElementById('remaining-balance').innerText = calculateRemainingBalance;

    }
    else {
        alert('You have to save your money less then 100 % or equal from your Blance Amount and more then 0 %')
    }



})