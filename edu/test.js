import fs from 'fs';

console.log('Sync before the call'); //1

fs.readFile('file.txt', () => {
  console.log('First log in the fs callback') //3
  setTimeout(() => console.log('timer'), 0); //5
  setImmediate(() => console.log('immediate')); //4
  // 'immediate' always prints first here — poll just finished, check is next
});

console.log('Sync after the call'); //2