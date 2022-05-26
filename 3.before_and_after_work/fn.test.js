const fn = require("./fn");

let num = 0;
// beforeEach(() => {
//   num = 0;
// });

// afterEach(() => {
//   num = 0;
// });
// test("0더하기 2는 2야", () => {
//   num = fn.add(num, 2);
//   expect(num).toBe(2);
// });
// test("0더하기 2는 2야", () => {
//   num = fn.add(num, 2);
//   expect(num).toBe(2);
// });

//이것 대신
// beforeEach(async () => {
//   user = await fn.connectUserDB();
// });
// afterEach(() => {
//   return fn.disconnectDB();
// });

//이걸 사용하자
// beforeAll(async () => {
//   user = await fn.connectUserDB();
// });
// afterAll(() => {
//   return fn.disconnectDB();
// });

// test("이름은 mike", () => {
//   expect(user.name).toBe("mike");
// });
// test("나이는 30", () => {
//   expect(user.age).toBe(30);
// });
// test("성별은 남성", () => {
//   expect(user.gender).toBe("male");
// });

// describe("이 안에서만 동작", () => {
//   let user2;
//   beforeAll(async () => {
//     user2 = await fn.connectUserDB();
//   });
//   afterAll(() => {
//     return fn.disconnectDB();
//   });

//   test("이름은 mike", () => {
//     expect(user2.name).toBe("mike");
//   });
//   test("나이는 30", () => {
//     expect(user2.age).toBe(30);
//   });
//   test("성별은 남성", () => {
//     expect(user2.gender).toBe("male");
//   });
// });

test.only("0더하기 2는 2야", () => {
  num = fn.add(num, 2);
  expect(num).toBe(2);
});
test.skip("0더하기 2는 2야", () => {
  num = fn.add(num, 2);
  expect(num).toBe(2);
});
