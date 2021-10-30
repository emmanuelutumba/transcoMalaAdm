export interface HttpResponseModel<T> {
  code: string;
  message: string;
  token: string;
  data: any;
}
