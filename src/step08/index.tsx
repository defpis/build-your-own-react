/**
 * 渲染element到dom
 */
import Didact from "./didact";

function Counter() {
  const [count, setCount] = Didact.useState(0);
  const [count2, setCount2] = Didact.useState(0);
  return (
    <div>
      <button onClick={() => setCount((c) => c + 1)}>Count: {count}</button>
      <button onClick={() => setCount2((c) => c + 1)}>Count2: {count2}</button>
    </div>
  );
}

export default () => {
  const container = document.getElementById("root");
  Didact.render(<Counter />, container);
};
