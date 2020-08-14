const { requestIdleCallback } = window;

function createElement(type, props, ...children) {
  return {
    type,
    props: {
      ...props,
      children: children.map((child) => (typeof child === 'object' ? child : createTextElement(child))),
    },
  };
}
function createTextElement(text: string) {
  return {
    type: 'TEXT_ELEMENT',
    props: {
      nodeValue: text,
      children: [],
    },
  };
}

function render(element, container) {
  const dom = element.type === 'TEXT_ELEMENT' ? document.createTextNode('') : document.createElement(element.type);

  // 不为children的属性都复制到dom节点上
  const isProperty = (key) => key !== 'children';
  Object.keys(element.props)
    .filter(isProperty)
    .forEach((name) => {
      dom[name] = element.props[name];
    });

  // 递归构建dom树
  element.props.children.forEach((child) => render(child, dom));

  // 挂载到父节点
  container.appendChild(dom);
}

let nextUnitOfWork = null;

function workLoop(deadline) {
  let shouldYield = false;
  while (nextUnitOfWork && !shouldYield) {
    // 执行单元任务
    nextUnitOfWork = performUnitOfWork(nextUnitOfWork);
    // 通过剩余时间判断是否需要立刻交还执行权
    shouldYield = deadline.timeRemaining() < 1;
  }
  // 执行权交还给浏览器
  requestIdleCallback(workLoop);
}

requestIdleCallback(workLoop);

function performUnitOfWork(nextUnitOfWork) {
  // TODO 处理单元任务
}

const Didact = {
  createElement,
  render,
};

export default Didact;
