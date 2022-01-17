import insertData from '../utils/insert';

const Insert = (target, value: object) => {
  const element = document.getElementById(target);
  element.innerHTML = insertData(element.innerHTML, value);
};

export default Insert;
