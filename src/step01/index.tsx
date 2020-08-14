/**
 * 实现js描述dom节点
 */
import Didact from './didact';

const element = (
  <div id='foo'>
    <a>bar</a>
    <b />
  </div>
);

export default () => {
  console.log(element);
};
