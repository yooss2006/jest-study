// const fn = require("./fn");

//콜백 함수 비동기 테스트
// test("3초 후에 받아온 이름은 Mike이다.", () => {
//   function callback(name) {
//     expect(name).toBe("tme");
//   }
//   fn.getName(callback);
// });

// test("3초 후에 받아온 이름은 Mike이다.", (done) => {
//   function callback(name) {
//     try {
//       expect(name).toBe("mike");
//       done();
//     } catch (error) {
//       done();
//     }
//   }
//   fn.getName(callback);
// });

//promise 비동기 테스트
// test("3초 후에 받아온 나이는 30", () => {
//   return fn.getAge().then((age) => {
//     expect(age).toBe(30);
//   });
// });
//resolves, rejects
// test("3초 후에 받아온 나이는 30", () => {
//   return expect(fn.getAge()).resolves.toBe(30);
// });

//async await
// test("3초 후에 받아온 나이는 30", async () => {
//   const age = await fn.getAge();
//   expect(age).toBe(30);
// });

// test("3초 후에 받아온 나이는 30", async () => {
//   await expect(fn.getAge()).resolves.toBe(30);
// });
