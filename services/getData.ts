import axios from 'axios';
import { Resort, Weather, WeatherObject, WeatherResponse } from '../types';

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
    const weatherReponse = await axios.get<WeatherResponse[]>(
      `${baseUrl}/weather/${resort}`,
    );
    const mappedWeather = weatherReponse.data.map((x: WeatherResponse) => {
      const newWeather: Weather = { ...x, datetime: new Date(x.datetime) };
      return newWeather;
    });
    const sortedWeather = mappedWeather.sort(
      //@ts-ignore
      (a: Weather, b: Weather) => a.datetime - b.datetime,
    );

    resortWeather[resort] = sortedWeather;
  }
  console.log(resortWeather);

  return resortWeather;
};
