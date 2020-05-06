export default function getDomain(url: string) {
  let regex = /(?:[\w-]+\.)+[\w-]+/;
  let domain = regex.exec(url);
  return domain ? domain[0] : '';
}
