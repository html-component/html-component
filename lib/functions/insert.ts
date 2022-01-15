const Insert = (target, value: object) => {
  const element = document.getElementById(target);
  let html = element.innerHTML;

  Object.keys(value).forEach((key) => {
    html = html.replace(new RegExp(`{{${key}}}`, 'g'), value[key]);
  });

  element.innerHTML = html;
};

export default Insert;
