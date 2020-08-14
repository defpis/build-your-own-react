/**
 * 渲染element到dom
 */
import Didact from './didact';

const element = (
  <div id='foo'>
    <a>bar</a>
    <b />
  </div>
);

export default () => {
  const container = document.getElementById('root');
  Didact.render(element, container);
};
