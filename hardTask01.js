'use strict';
const allCashboxes = [
    [12, 4500], 
    [7, 3210], 
    [4, 650], 
    [3, 1250], 
    [9, 7830], 
    [1, 990], 
    [6, 13900], 
    [1, 370]
];

const getAveragePriceGoods = (allCashbox) => {
    const check = [];
    for ( let i = 0; i < allCashbox.length; i ++) {
        check.push(allCashbox[i][1] / allCashbox[i][0]).math; 
    }
    return check;
}

console.log(getAveragePriceGoods(allCashboxes));