import renderer from "react-test-renderer";
import Timer from "./Timer";

test("초 표시", () => {
  Date.now = jest.fn(() => 123456789);
  const el = renderer.create(<Timer />).toJSON();
  expect(el).toMatchSnapshot();
});
