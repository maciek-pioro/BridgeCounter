function between(a: number, num: number, b: number): boolean {
  return a <= num && num <= b;
}

function pointsToIMP(points: number): number {
  if (between(20, points, 40)) return 1;
  if (between(50, points, 80)) return 2;
  if (between(90, points, 120)) return 3;
  if (between(130, points, 160)) return 4;
  if (between(170, points, 210)) return 5;
  if (between(220, points, 260)) return 6;
  if (between(270, points, 310)) return 7;
  if (between(320, points, 360)) return 8;
  if (between(370, points, 420)) return 9;
  if (between(430, points, 490)) return 10;
  if (between(500, points, 590)) return 11;
  if (between(600, points, 740)) return 12;
  if (between(750, points, 890)) return 13;
  if (between(900, points, 1090)) return 14;
  if (between(1100, points, 1290)) return 15;
  if (between(1300, points, 1490)) return 16;
  if (between(1500, points, 1740)) return 17;
  if (between(1750, points, 1990)) return 18;
  if (between(2000, points, 2240)) return 19;
  if (between(2250, points, 2490)) return 20;
  if (between(2500, points, 2990)) return 21;
  if (between(3000, points, 3490)) return 22;
  if (between(3500, points, 3990)) return 23;
  if (between(4000, points, Infinity)) return 24;
  throw new Error('Illegal number of points');
}

export default pointsToIMP;
export { pointsToIMP };
