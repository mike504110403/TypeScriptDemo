//import { checkElementInArray } from "./shares";

//#region  陣列型別指定
let numberArray: number[] = [100, 75, 42];
//checkElementInArray(numberArray);
let stringArray: Array<string> = ["aaa", "bbb", "ccc"]
//checkElementInArray(stringArray);
stringArray.push("111");
//checkElementInArray(stringArray);

//stringArray.push(111); // -> 型別不符，報錯
let unionTypeArray: (number | string)[] = [111, "222", 333]
//checkElementInArray(unionTypeArray);
//#endregion

//#region 陣列型別推論
let boolArray = [true, false, true];
//checkElementInArray(boolArray);
let mixTypeArray = ["ddd", 444, false];
//checkElementInArray(mixTypeArray);
//#endregion

//#region 型別推論錯誤
let array5: number[];
//array5.push("123"); // -> 型別不符，報錯

// 接數字陣列函式
function numAcceptor(nums: number[]) { }
let array6 = [111, 222, 333]; // number[]
//checkElementInArray(array6);
numAcceptor(array6); // -> 型別符合

let array7 = ["11", 3]; // (string|number)[]
//checkElementInArray(array7);
//numAcceptor(array7); // -> 型別不符，報錯
//#endregion

//#region 空陣列問題
// let emptyArray = []; // any[]
// emptyArray.push(123, "666", true, "文字");
// //checkElementInArray(emptyArray);
// emptyArray.forEach(elem => {
//     console.log(calculateTax(elem));
// });

// let emptyArray2: string[] = [];
// emptyArray2.forEach(elem => {
//     console.log(calculateTax(elem)); // 元素型別不符，報錯
// });
//#endregion

//#region never型別
let emptyArray3 = [];
//emptyArray3.push(111);
let emptyArray4 = [] as number[];
//#endregion