import { toPersianDigits } from "./to-persian-digits";

export function commaThree(number: number | undefined): string {
  return toPersianDigits(new Intl.NumberFormat().format(Number(number)));
}
