export function toPersianDigits(number: number | string): string {
  const persian = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  return String(number).replace(/\d/g, (d) => persian[parseInt(d)]);
}
