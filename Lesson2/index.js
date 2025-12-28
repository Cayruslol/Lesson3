totalPrice = 5000;
accountBalance = 4500;
isVip = true;

if (isVip){
    totalPrice = totalPrice * 0.9;
}
if (accountBalance >= totalPrice){
    console.log("Оплата прошла успешно!");
}else{
    console.log("Недостаточно средств");
}