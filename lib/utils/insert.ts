import customEval from './eval';

/* eslint-disable implicit-arrow-linebreak */
export default function insertData(source: string, data: object) {
  const parse = (str: string) =>
    str
      .split('{{')
      .filter((val) => val.includes('}}'))
      .map((val) => val.substring(0, val.indexOf('}}')));

  parse(source).forEach((val) => {
    let vars = '';
    Object.keys(data).forEach((key) => {
      vars += `const ${key} = ${JSON.stringify(data[key])};`;
    });
    const evalvalue = customEval(`${vars};return ${val}`);
    source = source.replace(`{{${val}}}`, evalvalue);
  });

  return source;
}
