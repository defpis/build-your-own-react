/**
 * 渲染element到dom
 */
import Didact from "./didact";

const App = ({ name }) => {
  return <div>Hi {name}</div>;
};

const App2 = ({ name }) => {
  return (
    <div>
      Hi {name},<span> Two seconds ago.</span>
    </div>
  );
};

export default () => {
  const container = document.getElementById("root");
  Didact.render(<App name="Defpis" />, container);

  setTimeout(() => {
    Didact.render(<App2 name="WenJun" />, container);
  }, 2000);
};
