import { mobileDay } from '../constants/days';

export const millimeterToInch = (height: number) => {
  return Math.round(height / 25.4);
};

export const celsiusToFahrenheit = (temp: number) => {
  return Math.round((temp * 9) / 5 + 32);
};

export const mpsToMph = (speed: number) => {
  return Math.round(speed * 2.237);
};

export const getDayName = (i: number) => {
  if (i === 0) return 'Today';
  else {
    const today = new Date().getDay();
    let dayNum = today + i;
    if (dayNum < 7) return mobileDay[dayNum];
    else return mobileDay[dayNum - 7];
  }
};
