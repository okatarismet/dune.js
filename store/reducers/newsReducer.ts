import { News, NewsAction, NewsState } from "../../types/news";

const defaultState: NewsState = {
    data: {} as News,
    loading: false,
    error: "",
};

const newsReducer = (state: NewsState = defaultState, action: NewsAction) => {
    switch (action.type) {

        case "NEWS_SUCCESS":
            return { ...state, data: action.payload, loading: false };

        default:
            return state;
    }
};

export default newsReducer;
