const pinCodes = ["1111", "5678", "1234", "9999"];

const myPin = "1234";

for (const pin of pinCodes){
    if(pin === myPin){
        console.log(`Пин-код найден! Ваш пин-код: ${pin}`);
        break
    }
    else{
        console.log(`${pin} данный пин-код неверный`)
    }
}