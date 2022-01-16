/* eslint-disable no-new */
import ComponentBase from '../lib/base/component';
import HTMLMap from '../lib/components/c-each';
import HTMLTemplate from '../lib/components/c-template';

// Components

// Define Shadow Component

new ComponentBase('c-each', HTMLMap(), true);

// Define Component

customElements.define('c-template', HTMLTemplate);

export default {
  HTMLTemplate,
  HTMLMap,
};
