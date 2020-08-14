function createElement(type: string, props: Object | null, ...children: Array<string | Object>) {
  return {
    type,
    props: {
      ...props,
      // 思考：为什么不需要处理object类型的child？
      children: children.map((child: any) => (typeof child === 'object' ? child : createTextElement(child))),
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

const Didact = {
  createElement,
};

export default Didact;
