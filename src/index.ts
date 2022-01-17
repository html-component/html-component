/* eslint-disable no-new */
import ComponentBase from '../lib/base/component';
import HTMLMap from '../lib/components/c-each';
import HTMLFetch from '../lib/components/c-fetch';
import HTMLTemplate from '../lib/components/c-template';

// Components

// Define Shadow Component

new ComponentBase('c-each', HTMLMap(), true);
new ComponentBase('c-fetch', HTMLFetch(), true);

// Define Component

customElements.define('c-template', HTMLTemplate);

export default {
  HTMLTemplate,
  HTMLFetch,
  HTMLMap,
};
