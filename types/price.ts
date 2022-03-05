import { ThunkDispatch } from "redux-thunk";

export interface PriceState {
  data: Price[];
  loading: boolean;
  error: string;
}

interface PRICE_START {
  type: "PRICE_START";
}

interface PRICE_SUCCESS {
  type: "PRICE_SUCCESS";
  payload: Price[];
}

interface PRICE_ERROR {
  type: "PRICE_ERROR";
}
interface PRICE_CATCH {
  type: "PRICE_CATCH";
  payload: Price[];
}


export interface Price {
  id: string;
  rank: string;
  symbol: string;
  name: string;
  supply: string;
  maxSupply: string;
  marketCapUsd: string;
  volumeUsd24Hr: string;
  priceUsd: string;
  changePercent24Hr: string;
  vwap24Hr: string;
}


export type PriceAction =
  | PRICE_START
  | PRICE_SUCCESS
  | PRICE_ERROR
  | PRICE_CATCH

export type PriceDispatch = ThunkDispatch<PriceState, void, PriceAction>;
