import { NewComponent } from '../types';
import insertData from '../utils/insert';

export default class HTMLTemplate extends HTMLElement {
  constructor() {
    super();

    const data: NewComponent = {
      name: this.getprop('c:name'),
      props: this.getprop('c:props').split(' ') || [],
      html: this.innerHTML,
    };

    try {
      customElements.define(
        data.name,
        class extends HTMLElement {
          constructor() {
            super();

            let { html } = data;

            const dts = {} as any;

            data.props.forEach((prop) => {
              const value = this.getAttribute(`props:${prop}`);
              dts[prop] = value;
            });

            html = insertData(html, dts);

            this.outerHTML = html;
          }
        }
      );
    } catch (e) {
      console.error(e);
    }

    // Delete Self
    this.outerHTML = '';
  }

  getprop(attribute: string) {
    return this.getAttribute(attribute);
  }
}
