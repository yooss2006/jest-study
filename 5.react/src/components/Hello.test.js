import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import Hello from "./Hello";
const user = {
  name: "jinvvv",
  age: 30,
};
const user2 = {
  age: 30,
};

//스냅 샷
test("snapshot:name 있음", () => {
  const element = renderer.create(<Hello user={user} />).toJSON();
  expect(element).toMatchSnapshot();
});
test("snapshot:name 없음", () => {
  const element = renderer.create(<Hello />).toJSON();
  expect(element).toMatchSnapshot();
});

test("hello라는 글자가 포함되었는가?", () => {
  render(<Hello user={user} />);
  const helloEl = screen.getByText(/Hello/i);
  expect(helloEl).toBeInTheDocument();
});
