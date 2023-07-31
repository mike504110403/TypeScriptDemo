let literral1;
//literral1 = 100;
let literral2;
literral1 = 1;
literral2 = literral1;
//console.log(literral2);
literral1 = 2;
//literral2 = literral1; // -> 報錯 literral2 的字面型別中沒有2
function calculatePrice(q, prices) {
    return q * prices;
}
let total = calculatePrice(1, 2000);
total = calculatePrice(2, 2000);
//total = calculatePrice(3, 2000); // 報錯
//#region 混用字面型別
function getRandomValue() {
    return (Math.floor(Math.random() * 4) + 1);
}
var Weather;
(function (Weather) {
    Weather["London"] = "LON";
    Weather["Paris"] = "PAR";
    Weather["Chicago"] = "CHI";
})(Weather || (Weather = {}));
function getMixedValue() {
    // 指定回傳型別 且可混和型別
    switch (getRandomValue()) {
        case 1:
            return 1;
        case 2:
            return "Hello";
        case 3:
            return true;
        case 4:
            return Weather.London;
    }
}
console.log(`Value: ${getMixedValue()}`);
function getMixedValue2(input) {
    // 指定回傳型別 且可混和型別
    switch (getRandomValue()) {
        case 1:
            return 1;
        case 2:
            return "Hello";
        case 3:
            return true;
        case 4:
            return Weather.London;
    }
}
//#endregion
