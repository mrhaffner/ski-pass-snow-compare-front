export interface Resort {
  id: string;
  name: string;
  state: string;
  pass: 'ikon' | 'epic';
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
