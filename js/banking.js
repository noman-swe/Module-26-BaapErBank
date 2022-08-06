document.getElementById('deposit-btn').addEventListener('click', function(event){
    const depositInput = document.getElementById('deposit-input');
    const depositTxt = depositInput.value;
    const newDepositAmount = parseFloat(depositTxt);
    

    const depositTotal = document.getElementById('deposit-total');
    depositTotal.innerText = newDepositAmount; 

   depositInput.value = ''; 
});
