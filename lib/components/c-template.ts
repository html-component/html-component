import { NewComponent } from '../types';

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

            data.props.forEach((prop) => {
              html = html.replace(new RegExp(`{{${prop}}}`, 'g'), this.getAttribute(`props:${prop}`));
            });

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
