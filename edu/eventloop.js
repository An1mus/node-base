import fs from 'fs';

console.log('1');

setTimeout(() => {
  console.log('2');
}, 0);

const promise = new Promise((resolve, reject) => {
  console.log('3');

  resolve();
})

fs.readFile("file.txt", () => {
  console.log('4');
  
  setImmediate(() => console.log('5'));
  setTimeout(() => console.log('6'), 0);
});

setImmediate(() => {
  console.log('7');
});

promise.then(() => {
  console.log("8")
})

Promise.resolve().then(() => {
  console.log('9');
});

process.nextTick(() => {
  console.log('10');
});

console.log('11');