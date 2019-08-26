/**
 * Method checks html element and if not present, it creates it with the given class
 * @param selector
 * @constructor
 */
export const CheckCreateHTMLElement: (selector: string) => void = (selector) => {
  const trimClass: string = selector.substring(1);
  const widgetTarget: HTMLElement | null = document.querySelector(trimClass);
  if(!widgetTarget) {
    const widgetContainer = document.createElement('div');
    widgetContainer.className = trimClass;
    document.body.appendChild(widgetContainer);
  }
};

/**
 * Method removes html element from dom
 * @param selector
 * @constructor
 */
export const RemoveHtmlElement: (selector: string) => void = (selector) => {
  const element: HTMLElement | null = document.querySelector(selector);
  if(element && element.parentNode) {
    element.parentNode.removeChild(element);
  }
};
