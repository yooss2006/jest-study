const fn = require("./fn");

// const mockFn = jest.fn();

// mockFn();
// mockFn(1);
// test("dd", () => {
//   console.log(mockFn.mock.calls); //[ [], [ 1 ] ]
//   expect("dd").toBe("dd");
// });
// test("목함수 호출 횟수는 2번입니다.", () => {
//   expect(mockFn.mock.calls.length).toBe(2);
// });
// test("2번째로 호출된 함수에 전달된 첫번째 인수는 1입니다.", () => {
//   expect(mockFn.mock.calls[1][0]).toBe(1);
// });

// function forEachAdd1(arr) {
//   arr.forEach((num) => {
//     mockFn(num + 1);
//   });
// }

// forEachAdd1([10, 20, 30]);
// test("함수 호출은 3번됩니다.", () => {
//   expect(mockFn.mock.calls.length).toBe(3);
// });
// test("전달된 값은 11, 21, 31 입니다.", () => {
//   expect(mockFn.mock.calls[0][0]).toBe(11);
//   expect(mockFn.mock.calls[1][0]).toBe(21);
//   expect(mockFn.mock.calls[2][0]).toBe(31);
// });

// const mockFn = jest.fn((num) => num + 1);
// mockFn(10);
// mockFn(20);
// mockFn(30);

// test("결과", () => {
//   console.log(mockFn.mock.results);
//   expect(mockFn.mock.results[0].value).toBe(11);
//   expect(mockFn.mock.results[1].value).toBe(21);
//   expect(mockFn.mock.results[2].value).toBe(31);
// });

//mockReturnValueOnce  사용
// const mockFn = jest.fn();
// mockFn
//   .mockReturnValueOnce(true)
//   .mockReturnValueOnce(false)
//   .mockReturnValueOnce(true)
//   .mockReturnValueOnce(false)
//   .mockReturnValue(true);

// const result = [1, 2, 3, 4, 5].filter((num) => mockFn(num));

// test("홀수는 1,3,5", () => {
//   expect(result).toStrictEqual([1, 3, 5]);
// });

//mockResolvedValue 사용
// const mockFn = jest.fn();
// mockFn.mockResolvedValue({ name: "mike" });

// test("받아온 이름은 mike", () => {
//   mockFn().then((res) => {
//     expect(res.name).toBe("mike");
//   });
// });

//모킹 모듈 만들기
// jest.mock("./fn");

// fn.createUser.mockReturnValue({ name: "mike" });

// test("유저를 만든다.", () => {
//   const user = fn.createUser("mike");
//   expect(user.name).toBe("mike");
// });

//유용한 목함수 메서드
const mockFn = jest.fn();
mockFn(10, 20);
mockFn();
mockFn(30, 40);
test("한 번 이상 호출됐다.", () => {
  expect(mockFn).toBeCalled();
});
test("정확히 3번 호출됐다.", () => {
  expect(mockFn).toBeCalledTimes(3);
});
test("10이랑 20을 전달받은 함수가 있다.", () => {
  expect(mockFn).toBeCalledWith(10, 20);
});
test("마지막 함수는 30이랑 40 받았다.", () => {
  expect(mockFn).lastCalledWith(30, 40);
});
