//#region 列舉型別
// enum Product { Hat, Gloves, Umbrella };
// console.log(Product.Hat);
// let prductValue: Product = 0;
// console.log(prductValue);
// console.log(Product[0]);
// console.log(Product[3]);
//#endregion
//#region 自訂列舉值
var Product2;
(function (Product2) {
    Product2[Product2["Hat"] = 0] = "Hat";
    Product2[Product2["SunGlass"] = 1] = "SunGlass";
    Product2[Product2["Gloves"] = 333] = "Gloves";
    Product2[Product2["Umbrella"] = 334] = "Umbrella";
    Product2[Product2["Pants"] = 1] = "Pants";
})(Product2 || (Product2 = {}));
;
var OtherEnum;
(function (OtherEnum) {
    OtherEnum[OtherEnum["First"] = 10] = "First";
    OtherEnum[OtherEnum["Second"] = 20] = "Second";
})(OtherEnum || (OtherEnum = {}));
;
var Product3;
(function (Product3) {
    Product3[Product3["Hat"] = 11] = "Hat";
    Product3[Product3["Gloves"] = 20] = "Gloves";
    Product3[Product3["Umbrella"] = 31] = "Umbrella";
})(Product3 || (Product3 = {}));
;
//#endregion
//#region 字串列舉
var City;
(function (City) {
    City["London"] = "London";
    City["Paris"] = "Paris";
    City["NY"] = "NewYork";
})(City || (City = {}));
// console.log(City.London);
// console.log("Paris");
//#endregion
//#region 列舉值的侷限
//let MyProduct: Product3 = 0;
let a = Product3[20];
//console.log(a);
let MyCity = City.Paris;
let b = City["Paris"];
//console.log(b);
//#endregion
//#region 型別防衛敘述
let productValue = Product3.Hat;
if (typeof productValue === "number") {
    //console.log("Value is a number");
}
let unionValue = Product3.Hat;
if (typeof unionValue === "number") {
    //console.log("Value is a number");
}
//#endregion
//#region 列舉常數
var enum9;
(function (enum9) {
    enum9[enum9["aaa"] = 0] = "aaa";
    enum9[enum9["bbb"] = 1] = "bbb";
    enum9[enum9["ccc"] = 2] = "ccc";
})(enum9 || (enum9 = {}));
;
let enum9Value = enum9.aaa;
;
let enum10Value = 0 /* aaa */;
//console.log(enum10Value);
//let c: enum10 = enum10[0];
//#endregion
