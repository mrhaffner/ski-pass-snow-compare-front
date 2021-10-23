export interface Resort {
  id: string;
  name: string;
  state: string;
  pass: 'ikon' | 'epic';
}

interface WeatherParent {
  high_temp: number;
  min_temp: number;
  pop: number;
  snow: number;
  wind_gust_sped: number;
  resort_id: string;
  weather_code: number;
}

export interface WeatherResponse extends WeatherParent {
  datetime: string;
}

export interface Weather extends WeatherParent {
  datetime: Date;
}

export interface WeatherObject {
  [key: string]: Weather[];
}
