let addr = 'http://localhost:8080/default.html?year=2017&month=february'
let q = url.parse(addr, true);
console.log(q.host);
console.log(q.pathname);
console.log(q.search);