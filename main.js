// This file have no purpose, it's just for testing settings

const test = () => {
  console.log('test');
};

const test2 = () => {
  console.log('test2');
};

const test3 = (cb) => {
  setImmediate(cb);
};

test();
test2();
test3(() => { console.log('test3') });

console.log('Hello world');