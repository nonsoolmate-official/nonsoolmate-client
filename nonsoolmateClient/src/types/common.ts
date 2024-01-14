export interface Response<T> {
  message: string;
  code: number;
  data: T;
}
