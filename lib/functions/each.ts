import insertData from '../utils/insert';

const Each = (target: string, value) => {
  const element = document.getElementById(target);
  const html = element.innerHTML;

  const returnValue = element.getAttribute('c:return-v');
  const returnIndex = element.getAttribute('c:return-i');

  let ResultValue = '';

  element.innerHTML = '';

  value.forEach((item, index) => {
    const data = {};

    (data as any)[returnValue] = item;
    (data as any)[returnIndex] = index;

    ResultValue += insertData(html, data);
  });

  element.outerHTML = ResultValue;
};

export default Each;
