import ComponentBase from '../lib/base/component';
import FuncEach from '../lib/functions/each';
import ComponentEach from '../lib/functions/eachclass';
import Fetch from '../lib/functions/fetch';
import Insert from '../lib/functions/insert';
import whenLoad from '../lib/functions/load';

// Functions

(window as any).Each = FuncEach;
(window as any).WhenLoad = whenLoad;
(window as any).Insert = Insert;
(window as any).ComponentFetch = Fetch;
(window as any).ComponentBase = ComponentBase;
(window as any).ComponentEach = ComponentEach;
