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
// type ObjShape1 = {
//   id: number;
//   name: string;
//   price?: number;
// };
// type ObjShape2 = {
//   id: number;
//   name: string;
//   city: string;
// };

// let obj8 = { id: 1, name: "n1", price: 100 };
// let obj9 = { id: 2, name: "n2", price: 75 };
// let obj10 = { id: 3, name: "n3", price: 30 };
// let obj11 = { id: 4, name: "n4", city: "London" };

// let dataItems1: (ObjShape1 | ObjShape2)[] = [obj8, obj9, obj10, obj11];
// //dataItems1.forEach(item => console.log(`ID: ${item.id}, Name: ${item.name}`));

// type UnionType = {
//   id: number | string;
//   name: string;
// };
//#endregion

//#region 型別防衛敘述
// dataItems1.forEach(item => {
//     if ("city" in item) {
//         console.log(`Person: ${item.name}, ${item.city}`)
//     } else {
//         console.log(`Product: ${item.name}, ${item.price}`)
//     }
// })

// function isPerson(testObj: any): testObj is ObjShape2 {
//   return testObj.city != undefined;
// }
// dataItems1.forEach((item) => {
//   if (isPerson(item)) {
//     console.log(`Person: ${item.name}, ${item.city}`);
//   } else {
//     console.log(`Product: ${item.name}, ${item.price}`);
//   }
// });
//#endregion

//#region 型別交集
// type ObjShape3 = {
//   id: string;
//   name: string;
//   city: string;
// };
// type ObjShape4 = {
//   company: string;
//   dept: string;
// };

// let obj12 = {
//   id: "bsmith",
//   name: "Bob",
//   city: "London",
//   company: "Acme Co",
//   dept: "Sales",
// };

// let dataItems2: (ObjShape3 & ObjShape4)[] = [obj12];
// dataItems2.forEach((item) => {
//   console.log(`Person: ${item.id}, ${item.name}, ${item.city}`);
//   console.log(`Employee: ${item.id}, ${item.name}, ${item.city}`);
// });
//#endregion

//#region 合併資料
// type Person = {
//   id: string;
//   name: string;
//   city: string;
// };
// type Employee = {
//   id: string;
//   company: string;
//   dept: string;
// };
// // 型別交集別名
// type EmployeePerson = Person & Employee;
// function correlateData(
//   peopleData: Person[],
//   staff: Employee[]
// ): EmployeePerson[] {
//   let result: EmployeePerson[] = [];
//   peopleData.forEach((p) =>
//     result.push({
//       ...p,
//       // 找同id Employee 資料 找不到給預設
//       ...(staff.find((e) => e.id === p.id) || {
//         company: "None",
//         dept: "None",
//         id: p.id,
//       }),
//     })
//   );
//   return result;
// }

// let people: Person[] = [
//   { id: "bsmith1", name: "Bob Smith1", city: "London1" },
//   { id: "bsmith2", name: "Bob Smith2", city: "London2" },
//   { id: "bsmith3", name: "Bob Smith3", city: "London3" },
// ];
// let employees: Employee[] = [
//   { id: "bsmith1", company: "Acme Co1", dept: "Sales1" },
//   { id: "bsmith2", company: "Acme Co2", dept: "Sales2" },
// ];

// let dataItems: EmployeePerson[] = correlateData(people, employees);

// // dataItems.forEach((item) => {
// //   console.log(`Person: ${item.id}, ${item.name}, ${item.city}`);
// //   console.log(`Employee: ${item.id}, ${item.company}, ${item.dept}`);
// // });

// // 向下相容
// function writePerson(per: Person): void {
//   console.log(`Person: ${per.id}, ${per.name}, ${per.city}`);
// }
// function writeEmployee(per: Employee): void {
//   console.log(`Employee: ${per.id}, ${per.company}, ${per.dept}`);
// }
// dataItems.forEach((item) => {
//   writePerson(item);
//   writeEmployee(item);
// });
//#endregion

//#region 屬性合併

// type Person = {
//   id: string;
//   name: string;
//   city: string;
//   //contact: number;
//   contactObj: { phone: number };
// };
// type Employee = {
//   id: string;
//   company: string;
//   dept: string;
//   //contact: string;
//   contactObj: { name: string };
// };
// type EmployeePerson = Person & Employee;
// let typeeTst = ({} as EmployeePerson).contactObj; // nerver
// //let typeeTst = ({} as EmployeePerson).contact; // nerver

// let person1: EmployeePerson = {
//   id: "bsmith",
//   name: "Bob Smith",
//   city: "London",
//   company: "Acme Co",
//   dept: "Sales",
//   // contact: "111", // string不是never 無法指派
//   contactObj: { name: "Alice", phone: 12345678 },
// };
// let person2: EmployeePerson = {
//   id: "bsmith2",
//   name: "Bob Smith2",
//   city: "London2",
//   company: "Acme Co2",
//   dept: "Sales2",
//   //contact: 111, // number不是never 無法指派
//   contactObj: { name: "Alice", phone: 12345678 },
// };
//#endregion

//#region 物件方法合併
type Person = {
  id: string;
  name: string;
  city: string;
  contact: { phone: number };
  getContact(field: string): string;
};
type Employee = {
  id: string;
  company: string;
  dept: string;
  contact: { name: string };
  getContact(field: number): number;
};
type EmployeePerson = Person & Employee;
let typefunTest = ({} as EmployeePerson).getContact; // ((field: string) => string) & ((field: number) => number);

let person1: EmployeePerson = {
  id: "bsmith",
  name: "Bob Smith",
  city: "London",
  company: "Acme Co",
  dept: "Sales",
  contact: { name: "Alice", phone: 12345678 },
  getContact(field: string | number): any {
    return typeof field === "string" ? "Alice" : 321321321;
  },
};
let person2: EmployeePerson = {
  id: "bsmith2",
  name: "Bob Smith2",
  city: "London2",
  company: "Acme Co2",
  dept: "Sales2",
  contact: { name: "Alice", phone: 12345678 },
  getContact(field: string | number): any {
    return typeof field === "string" ? "Alice" : 321321321;
  },
};
let stringtypeTest = person1.getContact("Alice"); // string
let numbertypeTest = person1.getContact(123); // number
//#endregion
