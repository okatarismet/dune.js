import { News, NewsDispatch } from "../../types/news";
import { coincap, cryptopanic } from "../../lib/api";
import config from '../../lib/config'

export const getNews = () => async (dispatch: NewsDispatch) => {
    config.DEBUG && console.log("getNews()")
    try {
        const response = await cryptopanic().get("");
        config.DEBUG && console.log(response.data.data)
        config.DEBUG && console.log("NEWS_SUCCESS")
        dispatch({ type: "NEWS_SUCCESS", payload: response.data.data });
    } catch {
    }
};