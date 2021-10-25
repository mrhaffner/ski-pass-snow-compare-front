import axios from 'axios';
import { Resort, ResortBase, Weather } from '../types';
import {
  celsiusToFahrenheit,
  millimeterToInch,
  mpsToMph,
} from '../utilities/unitConvert';

const baseUrl = 'http://127.0.0.1:8080/api';

export const fetchResortData = async () => {
  const resortsResponse = await axios.get<ResortBase[]>(`${baseUrl}/resorts`);
  const ikonResorts = resortsResponse.data.filter(
    (x: ResortBase) => x.pass === 'ikon',
  );
  const epicResorts = resortsResponse.data.filter(
    (x: ResortBase) => x.pass === 'epic',
  );
  return { epicResorts, ikonResorts };
};

export const fetchWeather = async (resortData: ResortBase[]) => {
  let resorts: Resort[] = [];

  for (const resort of resortData) {
    const weatherReponse = await axios.get<Weather[]>(
      `${baseUrl}/weather/${resort.id}`,
    );

    const weatherInFreedomUnits = weatherReponse.data.map((w: Weather) => {
      return {
        ...w,
        high_temp: celsiusToFahrenheit(w.high_temp),
        min_temp: celsiusToFahrenheit(w.min_temp),
        snow: millimeterToInch(w.snow),
        wind_gust_spd: mpsToMph(w.wind_gust_spd),
      };
    });

    const sortedWeather = weatherInFreedomUnits.sort(
      //@ts-ignore
      (a: Weather, b: Weather) => a.datetime - b.datetime,
    );
    const snowTotal = sortedWeather.reduce(
      (previousValue, currentValue) => previousValue + currentValue.snow,
      0,
    );
    resorts.push({ ...resort, snowTotal, weather: sortedWeather });
  }

  return resorts.sort((a, b) => b.snowTotal - a.snowTotal);
};
