document.getElementById('donation')
   .addEventListener('click',function(event){
    event.preventDefault();
    const addMoneyInput = document.getElementById('input-add-money').value;
    
    console.log(addMoneyInput);
       
    if('donation click'){
            console.log('adding money to your account');
            const balance = document.getElementById('account-balance').innerText;
             console.log(balance)
            const addMoneyNumber = parseFloat(addMoneyInput);
            const balanceNumber = parseFloat(balance);
            const newBalance = balanceNumber + addMoneyNumber;

             console.log(newBalance)
             document.getElementById('account-balance').innerText= newBalance;
        }
        else{
            alert('Please try again')
        }
})