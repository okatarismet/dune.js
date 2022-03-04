import { combineReducers } from "redux";
import { PriceState } from "../../types/price";
import { NewsState } from "../../types/news";
import priceReducer from "../reducers/priceReducer";
import newsReducer from "../reducers/newsReducer";

export interface AppState {
    price: PriceState,
    news: NewsState,
}

const rootReducer = combineReducers<AppState>({
    price: priceReducer,
    news: newsReducer,
});

export default rootReducer;
