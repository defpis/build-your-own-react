/**
 * 渲染element到dom
 */
import Didact from "./didact";

const element = (
  <div id="foo">
    <a>bar</a>
    <b />
  </div>
);

const element2 = (
  <div id="foo">
    <h1>hello</h1>
    <a style="color: red;">bar</a>
    <b />
  </div>
);

export default () => {
  const container = document.getElementById("root");
  Didact.render(element, container);

  setTimeout(() => {
    Didact.render(element2, container);
  }, 1000);
};
