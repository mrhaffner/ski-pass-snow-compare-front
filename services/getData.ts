import axios from 'axios';
import { Resort, Weather, WeatherObject } from '../types';

const baseUrl = 'http://127.0.0.1:8080/api';

export const fetchResortData = async () => {
  const resortsResponse = await axios.get<Resort[]>(`${baseUrl}/resorts`);
  const ikonResorts = resortsResponse.data.filter(
    (x: Resort) => x.pass === 'ikon',
  );
  const epicResorts = resortsResponse.data.filter(
    (x: Resort) => x.pass === 'epic',
  );
  console.log(epicResorts);
  console.log(ikonResorts);

  return { epicResorts, ikonResorts };
};

export const fetchWeather = async (resortId: string[]) => {
  let resortWeather: WeatherObject = {};

  for (const resort of resortId) {
    const weatherReponse = await axios.get<Weather[]>(
      `${baseUrl}/weather/${resort}`,
    );

    const sortedWeather = weatherReponse.data.sort(
      //@ts-ignore
      (a: Weathere, b: Weather) => a.datetime - b.datetime,
    );
    resortWeather[resort] = sortedWeather;
  }
  console.log(resortWeather);

  return resortWeather;
};
