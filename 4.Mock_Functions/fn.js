const fn = {
  add: (num1, num2) => num1 + num2,
  createUser: (name) => {
    console.log("실제로 사용자가 생성되었습니다.");
    return {
      name,
    };
  },
};

module.exports = fn;
