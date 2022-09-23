
const data ={b: 2, c: 3, a: 1};
const data2 ={a: "Apple", c: "Google", b: "Microsoft"};
const data3 = {key3: undefined, key1: true, key2: false}

const keys = Object.keys(data).sort();
const values = keys.map(key => data[key]);
const result = [keys, values];
console.log("keysAndValues",data);
console.log("-->",result);

const keys2 = Object.keys(data2).sort();
const values2 = keys2.map(key => data2[key]);
const result2 = [keys2, values2];
console.log("keysAndValues",data2);
console.log("-->",result2);

const keys3 = Object.keys(data3).sort();
const values3 = keys3.map(key => data3[key]);
const result3 = [keys3, values3];
console.log("keysAndValues",data3);
console.log("-->",result3);






















