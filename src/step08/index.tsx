/**
 * 渲染element到dom
 */
import Didact from "./didact";

function Counter() {
  const [count, setCount] = Didact.useState(0);
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount((c) => c + 1)}>increase</button>
      <button onClick={() => setCount((c) => c - 1)}>decrease</button>
    </div>
  );
}

export default () => {
  const container = document.getElementById("root");
  Didact.render(<Counter />, container);
};
