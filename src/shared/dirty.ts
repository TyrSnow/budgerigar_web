export default function dirty(fields: object, props: object): boolean {
  for (let key in fields) {
    if (fields[key] !== props[key]) {
      return true;
    }
  }
  return false;
}