import customEval from './eval';

/* eslint-disable implicit-arrow-linebreak */
export default function insertData(source: string, data: object) {
  const parse = (str: string) => str.match(/\{\{(.*?)\}\}/g);

  parse(source).forEach((val) => {
    let vars = '';
    Object.keys(data).forEach((key) => {
      vars += `const ${key} = ${JSON.stringify(data[key])};`;
    });
    const evalvalue = customEval(`${vars};return ${val.slice(2, val.length - 2)}`);
    source = source.replace(val, evalvalue);
  });

  return source;
}
