function getMilk (money) {
    console.log("Buy " + calcBottles(money, 1.5) + " bottles of milk");
    return calcChange(money, 1.5);
  
}

function calcBottles(startingMoney, costPerBottle){
    var numberOfBottles = Math.floor(startingMoney / costPerBottle);
    return numberOfBottles;

}

function calcChange(startingAmount, costPerBottle){
    var change = startingAmount % costPerBottle;
    return change;
}

console.log("Hello master, here is your " + getMilk(5) + " change.");