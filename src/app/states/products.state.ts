export enum DataStateEnm{
  LOADING,
  LOADED,
  ERROR
}
export interface AppDataSate<T> {
  datastate?:DataStateEnm,
  data?:T,
  errorMessage?:string


}
