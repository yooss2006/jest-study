const fn = require("./fn");
// test("설명", () => {
//   expect(1).toBe(1);
// });

//toBe
test("2더하기 3은 5야", () => {
  expect(fn.add(2, 3)).toBe(5);
});
test("2더하기 5는 6이 아니야", () => {
  expect(fn.add(2, 5)).not.toBe(6);
});

//toEqual, toStrictEqual
// test("이름과 나이를 입력받아 객체를 반환해줘", () => {
//   expect(fn.makeUser("yoo", 26)).toBe({ name: "yoo", age: 26 });
// }); 실패
test("이름과 나이를 입력받아 객체를 반환해줘", () => {
  expect(fn.makeUser("yoo", 26)).toEqual({ name: "yoo", age: 26 });
});
test("이름과 나이를 입력받아 객체를 반환해줘", () => {
  expect(fn.makeUser("yoo", 26)).toStrictEqual({ name: "yoo", age: 26 });
});

//toBeNull, toBeUndefined, toBeDefined
test("null은 null입니다.", () => {
  expect(null).toBeNull();
});

//toBeTruthy, toBeFalsy
test("0은 false 입니다.", () => {
  expect(0).toBeFalsy();
});

//toBeGreaterThan 크다.
//toBeGreaterThanOrEqual 크거나 같다.
//toBeLessThan 작다
//toBeLessThanOrEqual 작거나 같다.
//정확히 몇 글자라면 toBe를 사용하자.
test("ID는 10글자 이하여야 합니다.", () => {
  const id = "yoofh2006ddd";
  expect(id.length).toBeLessThan(15);
});

test("0.1+0.2는 0.3이다.", () => {
  expect(fn.add(0.1, 0.2)).toBeCloseTo(0.3);
});

//toMatch
test("Hello World에 a라는 글자가 있나?", () => {
  expect("Hello World").toMatch(/H/);
});

//toContain
test("유저리스트에 mike가 있나?", () => {
  const user = "Mike";
  const userList = ["kim", "Mike"];
  expect(userList).toContain(user);
});

//toThrow
test("이거 에러나나요?", () => {
  expect(() => throwErr()).toThrow();
});
