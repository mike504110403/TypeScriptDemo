//import { checkElementInArray } from "./shares";
// function calculateTax(amount: number): number {
//     return amount * 1.2;
// }
// // 確認陣列中元素值和型別
// function checkElementInArray(aray: any) {
//     aray.forEach(elem => {
//         console.log(`Value: ${elem}, Type: ${typeof elem}`);
//     })
// }
//#region tuple
let tuple1 = ["111", 100];
//checkElementInArray(tuple1);
console.log(tuple1.length);
tuple1.push(111);
console.log(tuple1.length);
//checkElementInArray(tuple1);
//console.log(tuple1[1]);
//console.log(tuple1[2]); // 取不到
//#endregion
//#region tuple處理
// tuple1.forEach((h: string | number) => {
//     if (typeof h === "string") {
//         console.log(`String: ${h}`);
//     } else {
//         console.log(`Number: ${h.toFixed(2)}`);
//     }
// })
//#endregion
//#region 使用tuple
// let products: [string, number][] = [["Hat", 100], ["Gloves", 75]];
// // 以型別聯集為元素的陣列
// let tupleUnion: ([string, number] | boolean)[] = [true, false, ["Hat", 100], ...products];
// // 走訪並做型別防衛
// tupleUnion.forEach((elem: [string, number] | boolean) => {
//     if (elem instanceof Array) { // 若為陣列
//         elem.forEach((tupleElem: string | number) => {
//             if (typeof tupleElem === "string") {
//                 console.log(`String Value: ${tupleElem}`);
//             } else {
//                 console.log(`Number Value: ${tupleElem}`);
//             }
//         });
//     } else if (typeof elem === "boolean") { // 若為布林
//         console.log(`Boolean Value: ${elem}`);
//     }
// });
//#endregion
