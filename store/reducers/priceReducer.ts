import { Price, PriceAction, PriceState } from "../../types/price";

const defaultState: PriceState = {
    data: {} as Price[],
    loading: false,
    error: "",
};

const priceReducer = (state: PriceState = defaultState, action: PriceAction) => {
    switch (action.type) {
        case "PRICE_START":
            return { ...state, loading: true };

        case "PRICE_SUCCESS":
            return { ...state, data: action.payload, loading: false };

        case "PRICE_ERROR":
            return { ...state, loading: false, error: "Price fetch failed" };
        case "PRICE_CATCH":
            return { ...state, data: action.payload, loading: false, error: 'failed to fetch' };

        default:
            return state;
    }
};

export default priceReducer;
