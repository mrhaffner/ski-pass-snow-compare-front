import { Resort } from '../types';

export const getPassSnowTotal = (pass: Resort[]) => {
  return pass.reduce(
    (previousValue, currentValue) => previousValue + currentValue.snowTotal,
    0,
  );
};
