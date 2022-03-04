import { ThunkDispatch } from "redux-thunk";

export interface NewsState {
  data: News[];
  loading: boolean;
  error: string;
}

interface NEWS_START {
  type: "NEWS_START";
}

interface NEWS_SUCCESS {
  type: "NEWS_SUCCESS";
  payload: News[];
}

interface NEWS_ERROR {
  type: "NEWS_ERROR";
}



export interface News {
  author: string;
  title: string;
  description: string;
  url: string;
  source: string;
  image: string;
  category: string;
  language: string;
  country: string;
  published_at: Date;
}




export type NewsAction =
  | NEWS_START
  | NEWS_SUCCESS
  | NEWS_ERROR

export type NewsDispatch = ThunkDispatch<NewsState, void, NewsAction>;
