import { NewComponent } from '../types';
import insertData from '../utils/insert';

export default class HTMLTemplate extends HTMLElement {
  constructor() {
    super();

    const data: NewComponent = {
      name: this.getprop('c:name'),
      props: (this.getprop('c:props') || '').split(' ') || [],
      html: this.innerHTML,
    };
    console.log(data);

    try {
      customElements.define(
        data.name,
        class extends HTMLElement {
          constructor() {
            super();

            this.attachShadow({ mode: 'open' });
          }

          render() {
            let { html } = data;

            const dts = {} as any;
            data.props.forEach((prop) => {
              const value = this.getAttribute(`props:${prop}`);
              dts[prop] = value;
            });

            html = insertData(html, dts);

            this.shadowRoot.innerHTML = html;
          }

          connectedCallback() {
            this.render();
          }

          attributeChangedCallback(name, oldValue, newValue) {
            this.render();
          }
        }
      );
    } catch (e) {
      console.error(e);
    }
  }

  getprop(attribute: string) {
    return this.getAttribute(attribute);
  }
}
