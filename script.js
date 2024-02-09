function calculateMoney(ticketSell){
    const ticketPrice = ticketSell * 120;
    const darowanCost = 500;
    const lunchCost = 8 * 50;
    const totalStuffCost = darowanCost + lunchCost;
    const totalMoney = ticketPrice - totalStuffCost;
    return totalMoney;
}


function checkName(spell){
    const lastCharecter = spell[spell.length -1];
    if(lastCharecter === 'a' || lastCharecter === 'y' || lastCharecter === 'i' || lastCharecter === 'e' || lastCharecter === 'o' || lastCharecter === 'u' || lastCharecter === 'w' ){
        return 'Good Name';
    }
    else{
        return 'Bad Name';
    }
}


function deleteInvalids(remove) {
    return remove.filter(element => typeof element === 'number' && !isNaN(element));
}