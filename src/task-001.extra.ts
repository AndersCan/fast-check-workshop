export function bigIntAddition(a: string, b: string): string {
  const as = a.split('').reverse();
  const bs = b.split('').reverse();
  let length = Math.max(as.length, bs.length);
  let carry = 0;
  let accumulated = '';
  for (let i = 0; i < length; i++) {
    const x = Number.parseInt(as[i]) || 0;
    const y = Number.parseInt(bs[i]) || 0;

    let sum = x + y + carry;
    carry = 0;
    if (sum > 9) {
      carry = Math.floor(sum / 10);
      sum = sum % 10;
    }
    accumulated = `${sum}${accumulated}`;
  }
  return `${carry}${accumulated}`;
}
