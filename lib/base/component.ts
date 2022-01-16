/* eslint-disable no-unused-expressions */
/* eslint-disable prefer-rest-params */
/* eslint-disable no-unused-vars */

export default class ComponentBase {
  constructor(componentName: string, html: string, inner: boolean) {
    customElements.define(
      componentName,
      class extends HTMLElement {
        constructor() {
          super();
          inner ? (this.innerHTML = html) : (this.outerHTML = html);
        }
      }
    );
  }
}
