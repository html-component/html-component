export default class ComponentEach {
  public template;

  public element;

  constructor(target: string) {
    this.element = document.getElementById(target);
    this.template = this.element.innerHTML;
  }

  each(value: any) {
    const { element } = this;
    const html = this.template;

    const returnValue = element.getAttribute('c:return-v');
    const returnIndex = element.getAttribute('c:return-i');

    let ResultValue = '';

    element.innerHTML = '';

    value.forEach((item, index) => {
      const newHtml = html.replace(new RegExp(`{{${returnValue}}}`, 'g'), item);
      const newHtml2 = newHtml.replace(new RegExp(`{{${returnIndex}}}`, 'g'), index);
      ResultValue += newHtml2;
    });

    element.outerHTML = ResultValue;
  }
}
