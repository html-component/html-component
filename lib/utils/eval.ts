/* eslint-disable no-new-func */
export default function customEval(source: string) {
  return new Function(`${source}`)();
}
