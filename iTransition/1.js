const json = '{"name":"Yo-Saff-Bridge","husbands":3}';
const result = JSON.parse(json);
console.log(typeof json, typeof result, result.name, result.husbands); // Output: string object