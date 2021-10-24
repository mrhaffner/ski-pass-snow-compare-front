export type Pass = 'ikon' | 'epic';

export interface ResortBase {
  id: string;
  name: string;
  state: string;
  pass: Pass;
}

export interface Resort extends ResortBase {
  weather: Weather[];
  snowTotal: number;
}

export interface Weather {
  datetime: string;
  high_temp: number;
  min_temp: number;
  pop: number;
  snow: number;
  wind_gust_sped: number;
  resort_id: string;
  weather_code: number;
}

export interface WeatherObject {
  [key: string]: Weather[];
}
