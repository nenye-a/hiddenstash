const NUMBER_REG = /^[1-9][0-9]*$/;

export function validateNumber(field: string) {
  return NUMBER_REG.test(field);
}
