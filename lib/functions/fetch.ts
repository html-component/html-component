/* eslint-disable consistent-return */
const Fetch = (target: string, callback) => {
  const element = document.getElementById(target);
  const src = element.getAttribute('src');

  if (src) {
    fetch(src)
      .then((response) => {
        callback(element, response);
      })
      .catch((error) => console.error(error));
  } else {
    console.error('Fetch: No src attribute found');
  }
};

export default Fetch;
