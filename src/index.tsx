import ReactDOM from 'react-dom';
import React from 'react';
import { CheckCreateHTMLElement, RemoveHtmlElement } from "./Services/HtmlServices";
import DebugBar from "./Components/DebugBar";
import { IWidgetProps } from "./Interfaces/WidgetInterface";

const initEvent: Event = new CustomEvent("init",{detail: 3});

export default {
  /**
   * Initialize a new widget instance
   * @param selector
   */
  new: ({ selector }: IWidgetProps) => {
    CheckCreateHTMLElement(selector);

    return {
      render: (args: any) => {
        ReactDOM.render(<DebugBar/>, document.querySelector(selector));
        // @ts-ignore
        window.dispatchEvent(initEvent);
      },
    };
  },

  on: (event: string, callback: any) => {
    // eslint-disable-next-line no-restricted-globals
    addEventListener(event, callback);
  },

  /**
   * Destroy widget instance
   * @param selector
   */
  unmount: ({ selector }: IWidgetProps) => {
    const widgetElement: HTMLElement | null = document.querySelector(selector);

    if (widgetElement) {
      ReactDOM.unmountComponentAtNode(widgetElement);
      RemoveHtmlElement(selector);
    }
  }
};
