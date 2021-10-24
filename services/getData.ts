import axios from 'axios';
import { Pass, Resort, ResortBase, Weather, WeatherObject } from '../types';

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
    console.log(resort);

    const weatherReponse = await axios.get<Weather[]>(
      `${baseUrl}/weather/${resort.id}`,
    );

    const sortedWeather = weatherReponse.data.sort(
      //@ts-ignore
      (a: Weathere, b: Weather) => a.datetime - b.datetime,
    );
    const snowTotal = sortedWeather.reduce(
      (previousValue, currentValue) => previousValue + currentValue.snow,
      0,
    );
    resorts.push({ ...resort, snowTotal, weather: sortedWeather });
  }

  return resorts.sort((a, b) => b.snowTotal - a.snowTotal);
};
