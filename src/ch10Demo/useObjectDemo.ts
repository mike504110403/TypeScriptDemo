//#region 物件形狀型別
// let obj1 = { name: "Hat", price: 100 };
// let obj2 = { name: "Gloves", price: 75 };
// let obj3 = { name: "Gloves" };

// let products1 = [obj1, obj2, obj3];
//products.forEach(prod => console.log(`${prod.name}: ${prod.price}`)); // -> 報錯 obj3沒有price屬性
//#endregion

//#region 物件型別註記
//let products2: { name: string, price: number }[] = [obj1, obj2, obj3]; // ->報錯 obj3沒有price屬性
// let obj4 = { name: "Umbrella", price: 30, waterproof: true };
// let products3: { name: string, price: number }[] = [obj1, obj2, obj4];
//products3.forEach(prod => prod.waterproof); // -> 報錯 無該屬性
//#endregion

//#region 選擇性屬性
// let products4: { name: string, price: number, waterproof?: boolean }[] = [obj1, obj2, obj4]
// products4.forEach(prod => prod.waterproof); // 可使用
//#endregion

//#region 物件方法
// enum Feature { waterproof, Insulated, None }
// let obj5 = {
//     name: "Umbrella",
//     price: 30,
//     feature: Feature.waterproof,
//     hasFeature: function (checkFeature) {
//         return this.feature === checkFeature;
//     }
// }
// let obj6 = { name: "Hat", price: 100, feature: Feature.None };
// let obj7 = { name: "Gloves", price: 75, feature: Feature.Insulated };

// let products5: {
//     name: string,
//     price: number,
//     feature: Feature,
//     hasFeature?(f: Feature): boolean
// }[] = [obj5, obj6, obj7]

//products5.forEach(prod => console.log(`${prod.name}: , WaterProod: ${prod.hasFeature(Feature.waterproof)}`)) // -> 報錯 部分物件沒有hasFeature方法
// products5.forEach(prod =>
//     console.log(
//         `${prod.name}: , WaterProod: ${prod.hasFeature
//             ? prod.hasFeature(Feature.waterproof) : false}`)) // -> 報錯 部分物件沒有hasFeature方法
//#endregion

//#region 物件形狀型別別名
// type ProductShape = {
//     name: string,
//     price: number,
//     feature: Feature,
//     hasFeature?(f: Feature): boolean
// };
//#endregion

//#region 容許額外屬性
// let shades: ProductShape = {
//     name: "Sunglasses",
//     price: 54,
//     feature: Feature.None,
//     finish: "mirrored"
// }; // 加了形狀型別註記後，無法容許額外屬性
//#endregion

//#region 物件型別聯集
type ObjShape1 = {
    id: number,
    name: string,
    price?: number
}
type ObjShape2 = {
    id: number,
    name: string,
    city: string
}

let obj8 = { id: 1, name: "n1", price: 100 };
let obj9 = { id: 2, name: "n2", price: 75 };
let obj10 = { id: 3, name: "n3", price: 30 };
let obj11 = { id: 4, name: "n4", city: "London" };

let dataItems1: (ObjShape1 | ObjShape2)[] = [obj8, obj9, obj10, obj11];
//dataItems1.forEach(item => console.log(`ID: ${item.id}, Name: ${item.name}`));

type UnionType = {
    id: number | string,
    name: string
}
//#endregion

//#region 型別防衛敘述
// dataItems1.forEach(item => {
//     if ("city" in item) {
//         console.log(`Person: ${item.name}, ${item.city}`)
//     } else {
//         console.log(`Product: ${item.name}, ${item.price}`)
//     }
// })

function isPerson(testObj: any): testObj is ObjShape2 {
    return testObj.city != undefined;
}
dataItems1.forEach(item => {
    if (isPerson(item)) {
        console.log(`Person: ${item.name}, ${item.city}`)
    } else {
        console.log(`Product: ${item.name}, ${item.price}`)
    }
})

//#endregion