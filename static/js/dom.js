const dom = document => {

  const byId = id => document.getElementById(id);

  const create = (el, attribs = {}) => {
    const element = document.createElement(el);
    Object.keys(attribs).forEach(key => element.setAttribute(key, attribs[key]));
    return element;
  };
  const byClass = cls => document.getElementsByClassName(cls);
  const select = selector => document.querySelector(selector);
  const title = t => document.title = t;
  const append = parent => child => parent.appendChild(child);

  return { byId, byClass, create, select, title, append };
};
