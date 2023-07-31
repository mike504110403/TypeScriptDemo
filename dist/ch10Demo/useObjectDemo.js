//#region 物件形狀型別
// let obj1 = { name: "Hat", price: 100 };
// let obj2 = { name: "Gloves", price: 75 };
// let obj3 = { name: "Gloves" };
let obj8 = { id: 1, name: "n1", price: 100 };
let obj9 = { id: 2, name: "n2", price: 75 };
let obj10 = { id: 3, name: "n3", price: 30 };
let obj11 = { id: 4, name: "n4", city: "London" };
let dataItems1 = [obj8, obj9, obj10, obj11];
//#endregion
//#region 型別防衛敘述
// dataItems1.forEach(item => {
//     if ("city" in item) {
//         console.log(`Person: ${item.name}, ${item.city}`)
//     } else {
//         console.log(`Product: ${item.name}, ${item.price}`)
//     }
// })
function isPerson(testObj) {
    return testObj.city != undefined;
}
dataItems1.forEach(item => {
    if (isPerson(item)) {
        console.log(`Person: ${item.name}, ${item.city}`);
    }
    else {
        console.log(`Product: ${item.name}, ${item.price}`);
    }
});
//#endregion
