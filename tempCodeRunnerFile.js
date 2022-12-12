// built in modules
// const os = require('os');
// const fs = require('fs');

// user modules
import { area, circumference } from './circle.js';

// *****************************************************************************
// fs.readFile('./file.txt', 'utf-8', (err, data) => {
//   if (err) { throw err; }
//   console.log('data: ', data)
// })

let radius = 5;
console.log(area(radius));
console.log(circumference(radius));