import insertData from '../utils/insert';

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
      const data = {};

      (data as any)[returnValue] = item;
      (data as any)[returnIndex] = index;

      ResultValue += insertData(html, data);
    });

    element.innerHTML = ResultValue;
  }
}
