const printReceipt = require('../main');
const items = [
    {"id": "0001", "name" : "Coca Cola", "price": 3},
    {"id": "0002", "name" : "Diet Coke", "price": 4},
    {"id": "0003", "name" : "Pepsi-Cola", "price": 5},
    {"id": "0004", "name" : "Mountain Dew", "price": 6},
    {"id": "0005", "name" : "Dr Pepper", "price": 7},
    {"id": "0006", "name" : "Sprite", "price": 8},
    {"id": "0007", "name" : "Diet Pepsi", "price": 9},
    {"id": "0008", "name" : "Diet Mountain Dew", "price": 10},
    {"id": "0009", "name" : "Diet Dr Pepper", "price": 11},
    {"id": "0010", "name" : "Fanta", "price": 12}
];

it ('should print receipt', () => {
    let idInformation = ['0001', '0003', '0005', '0003'];
    expect(printReceipt(idInformation,items)).toBe(
`Receipts
------------------------------------------------------------
Coca Cola			3			1
Pepsi-Cola			5			2
Dr Pepper			7			1
------------------------------------------------------------
Price:	20`);
});