/*login button event handler*/
const loginBtn = document.getElementById("login")
loginBtn.addEventListener('click', function () {
    const loginArea = document.getElementById("login-area")
    loginArea.style.display = "none"

    const transactionArea = document.getElementById("transaction-area")
    transactionArea.style.display = "block"
})

//deposit button handller
const depositBtn = document.getElementById("addDeposit")
depositBtn.addEventListener('click', function () {
    const depositNumber = getInputNumber("depositAmount")
    // const depositNumber = parseFloat(depositAmount)
    
    updateSpanText("currentDeposit", depositNumber)
    updateSpanText("currentBalance", depositNumber)

    document.getElementById("depositAmount").value = ""
})

//withdraw button handler
const withdrawBtn = document.getElementById("addWithdraw")
withdrawBtn.addEventListener('click', function(){
    const withdrawNumber = getInputNumber("withdrawAmount")
    updateSpanText("currentWithdraw", withdrawNumber)
    updateSpanText("currentBalance", -1 * withdrawNumber);

    document.getElementById("withdrawAmount").value = ""
})

function updateSpanText(id, number) {
    const current = document.getElementById(id).innerText
    const currentNumber = parseFloat(current)
    const totalAmount = number + currentNumber
    document.getElementById(id).innerText = totalAmount
}

function getInputNumber(id){
    const amount = document.getElementById(id).value
    const  amountNumber = parseFloat(amount)
    return amountNumber
}