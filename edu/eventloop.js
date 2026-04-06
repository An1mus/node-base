import fs from 'fs';

console.log('1. Synchronous: Script Start');

setTimeout(() => {
  console.log('5. Timer: setTimeout (0ms)');
}, 0);

const promise = new Promise((resolve, reject) => {
  console.log('Promise');

  resolve();
})

fs.readFile("file.txt", () => {
  console.log('8. I/O: File Read Callback');
  
  // Inside an I/O callback, setImmediate always runs before setTimeout
  setImmediate(() => console.log('10. Check: setImmediate (inside I/O)'));
  setTimeout(() => console.log('11. Timer: setTimeout (inside I/O)'), 0);
});

setImmediate(() => {
  console.log('7. Check: setImmediate');
});

promise.then(() => {
  console.log("Resolve")
})

Promise.resolve().then(() => {
  console.log('4. Microtask: Promise.then');
});

process.nextTick(() => {
  console.log('3. Microtask: process.nextTick');
});

console.log('2. Synchronous: Script End');