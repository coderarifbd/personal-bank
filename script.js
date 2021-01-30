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

    function updateSpanText(id, number) {
        const current = document.getElementById(id).innerText
        const currentNumber = parseFloat(current)
        const totalAmount = number + currentNumber
        document.getElementById(id).innerText = totalAmount
    }

    document.getElementById("depositAmount").value = ""
})

//withdraw button handler
const withdrawBtn = document.getElementById("addWithdraw")
withdrawBtn.addEventListener('click', function(){
    const withdrawNumber = getInputNumber("withdrawAmount")
    console.log(withdrawNumber);
})

function getInputNumber(id){
    const amount = document.getElementById(id).value
    const  amountNumber = parseFloat(amount)
    return amountNumber
}