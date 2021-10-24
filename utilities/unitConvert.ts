export const millimeterToInch = (height: number) => {
  return Math.round(height / 25.4);
};

export const celsiusToFahrenheit = (temp: number) => {
  return Math.round((temp * 9) / 5 + 32);
};

export const mpsToMph = (speed: number) => {
  return Math.round(speed * 2.237);
};
