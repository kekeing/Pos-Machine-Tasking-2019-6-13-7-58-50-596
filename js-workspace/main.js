// const items = [
//     {"id": "0001", "name" : "Coca Cola", "price": 3},
//     {"id": "0002", "name" : "Diet Coke", "price": 4},
//     {"id": "0003", "name" : "Pepsi-Cola", "price": 5},
//     {"id": "0004", "name" : "Mountain Dew", "price": 6},
//     {"id": "0005", "name" : "Dr Pepper", "price": 7},
//     {"id": "0006", "name" : "Sprite", "price": 8},
//     {"id": "0007", "name" : "Diet Pepsi", "price": 9},
//     {"id": "0008", "name" : "Diet Mountain Dew", "price": 10},
//     {"id": "0009", "name" : "Diet Dr Pepper", "price": 11},
//     {"id": "0010", "name" : "Fanta", "price": 12}
// ];

function printReceipt(idInformation,items) {
     let totalInformation = countItems(idInformation);
     let itemInformation = getItemInformation(items,totalInformation);
     let totalPrice = calculateTotal(itemInformation);
    return printReceiptInformation(itemInformation,totalPrice);
}
//console.log(printReceipt());

function countItems(idInformation) {
    // let totalInformation = [];
    // let map = new Map();
    // for(let i = 0;i < idInformation.length;i++){
    //     if(map.get(idInformation[i] == null))
    //     {
    //         map.set(idInformation[i],1);
    //     }
    //     else map.set(idInformation[i],map.get(idInformation[i])+1);
    // }
    // map.forEach(function(value,key){totalInformation.push({id:key,count:value});});
    // return totalInformation;
    let totalInformation = [];
    for (let i = 0; i < idInformation.length; i++) {
        let index = isExit(totalInformation, idInformation[i]);
        if (index !== -1) { totalInformation[index].count++; }
        else { totalInformation.push({ id: idInformation[i], count: 1 }) };
    }
    return totalInformation;
}
//console.log(countItems(['0001', '0003', '0005', '0003']));


function isExit(result, id) {
    for (let i = 0; i < result.length; i++) {
        if (result[i].id === id) {
            return i;
        }
    }
    return -1;
}
//console.log(isExit(['0001', '0003', '0005', '0003'],'0001'));
function getItemInformation(items, totalInformation) {
    let result = [];
    for (let i = 0; i < totalInformation.length; ++i) {
        result.push(getItemLineInformation(items, totalInformation[i]));
    }
    return result;

}
// console.log(getItemInformation([
//     {"id": "0001", "name" : "Coca Cola", "price": 3},
//     {"id": "0002", "name" : "Diet Coke", "price": 4},
//     {"id": "0003", "name" : "Pepsi-Cola", "price": 5},
//     {"id": "0004", "name" : "Mountain Dew", "price": 6},
//     {"id": "0005", "name" : "Dr Pepper", "price": 7},
//     {"id": "0006", "name" : "Sprite", "price": 8},
//     {"id": "0007", "name" : "Diet Pepsi", "price": 9},
//     {"id": "0008", "name" : "Diet Mountain Dew", "price": 10},
//     {"id": "0009", "name" : "Diet Dr Pepper", "price": 11},
//     {"id": "0010", "name" : "Fanta", "price": 12}
// ],[ { id: '0001', count: 1 },
// { id: '0003', count: 2 },
// { id: '0005', count: 1 } ]));
function getItemLineInformation(items, totalLineInformation) {
    let result;
    for (let i = 0; i < items.length; ++i) {
        if (items[i].id === totalLineInformation.id) {
            result = { id: items[i].id, name: items[i].name, price: items[i].price, count: totalLineInformation.count };
        }
    }
    return result;
}
// console.log(getItemLineInformation([
//     {"id": "0001", "name" : "Coca Cola", "price": 3},
//     {"id": "0002", "name" : "Diet Coke", "price": 4},
//     {"id": "0003", "name" : "Pepsi-Cola", "price": 5},
//     {"id": "0004", "name" : "Mountain Dew", "price": 6},
//     {"id": "0005", "name" : "Dr Pepper", "price": 7},
//     {"id": "0006", "name" : "Sprite", "price": 8},
//     {"id": "0007", "name" : "Diet Pepsi", "price": 9},
//     {"id": "0008", "name" : "Diet Mountain Dew", "price": 10},
//     {"id": "0009", "name" : "Diet Dr Pepper", "price": 11},
//     {"id": "0010", "name" : "Fanta", "price": 12}
// ],{ id: '0001', count: 1 }));
function calculateTotal(itemInformation){
    let result = 0;
    for(let i=0;i<itemInformation.length;i++){
        result += itemInformation[i].price * itemInformation[i].count;

    }
    return result;
}
// console.log(calculateTotal([{ id: '0001', name: 'Coca Cola', price: 3, count: 1 },
// { id: '0003', name: 'Pepsi-Cola', price: 5, count: 2 },
// { id: '0005', name: 'Dr Pepper', price: 7, count: 1 }]));
function printReceiptInformation(itemInformation,price){
    let result = '';
    result += `Receipts
------------------------------------------------------------
`;
for(let i=0;i<itemInformation.length;i++){
    result += itemInformation[i].name +"\t\t\t" + itemInformation[i].price +"\t\t\t" + itemInformation[i].count +"\n";
    }
    result += `------------------------------------------------------------
Price:`;
    result += "\t" + price;

   return result;
}
// console.log(printReceiptInformation([{ id: '0001', name: 'Coca Cola', price: 3, count: 1 },
//  { id: '0003', name: 'Pepsi-Cola', price: 5, count: 2 },
//  { id: '0005', name: 'Dr Pepper', price: 7, count: 1 }],20))




 module.exports = printReceipt;


