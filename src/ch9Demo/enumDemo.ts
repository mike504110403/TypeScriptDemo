//#region 列舉型別
// enum Product { Hat, Gloves, Umbrella };
// console.log(Product.Hat);
// let prductValue: Product = 0;
// console.log(prductValue);
// console.log(Product[0]);
// console.log(Product[3]);
//#endregion

//#region 自訂列舉值
enum Product2 {
  Hat,
  SunGlass,
  Gloves = 333,
  Umbrella,
  Pants = 1,
}

enum OtherEnum {
  First = 10,
  Second = 20,
}
enum Product3 {
  Hat = OtherEnum.First + 1,
  Gloves = 20,
  Umbrella = Hat + Gloves,
}
//#endregion

//#region 字串列舉
enum City {
  London = "London",
  Paris = "Paris",
  NY = "NewYork",
}
// console.log(City.London);
// console.log("Paris");
//#endregion

//#region 列舉值的侷限
//let MyProduct: Product3 = 0;
let a = Product3[20];
//console.log(a);
let MyCity: City = City.Paris;
let b = City["Paris"];
//console.log(b);
//#endregion

//#region 型別防衛敘述
let productValue: Product3 = Product3.Hat;
if (typeof productValue === "number") {
  //console.log("Value is a number");
}

let unionValue: number | Product3 = Product3.Hat;
if (typeof unionValue === "number") {
  //console.log("Value is a number");
}
//#endregion

//#region 列舉常數
enum enum9 {
  aaa,
  bbb,
  ccc,
}
let enum9Value: enum9 = enum9.aaa;
//console.log(enum9Value);

const enum enum10 {
  aaa = 0,
  bbb,
  ccc,
}
let enum10Value: enum10 = enum10.aaa;
//console.log(enum10Value);

//let c: enum10 = enum10[0];
//#endregion
