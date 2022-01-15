import HTMLMap from '../lib/components/c-each';
import HTMLTemplate from '../lib/components/c-template';

// Components

customElements.define('c-template', HTMLTemplate);

customElements.define('c-map', HTMLMap);

export default {
  HTMLTemplate,
  HTMLMap,
};
