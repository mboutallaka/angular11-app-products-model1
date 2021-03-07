export enum TypesOfOperation {
  GET_ALL_PRODUCTS="[products] get all ",
  GET_AVAILABLE_PRODUCTS="[products] get available ",
  GET_SELECTED_PRODUCTS="[products] get selected ",
  GET_New_PRODUCTS="[products] get new ",
  SEARCH_PRODUCTS="[products] get search",
  DELETE_PRODUCTS="[products] delete",
  EDIT_PRODUCTS="[products] edit",
  SELECT_PRODUCTS="[products] select",
  PRODUCT_ADDED="[products] add",
  PRODUCT_UPDATED="[products] update",

}
export interface TypesOfs {
  type:TypesOfOperation,
  payload?:any

}
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
