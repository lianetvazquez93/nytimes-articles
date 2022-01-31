import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Article } from "../interfaces/article";

const apiKey = "au3zzi1h6OTBA9Yu5k4FGQlL0rtSnitT";

export interface QueryParams {
  term: string;
  page: number;
}

export interface ArticlesResponse {
  status: string;
  copyright: string;
  response: {
    docs: Article[];
    meta: {
      hits: number;
      offset: number;
      time: number;
    };
  };
}

export const nytArticlesSearchApi = createApi({
  reducerPath: "articles",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.nytimes.com/svc/search/v2/articlesearch.json",
  }),
  endpoints: (builder) => ({
    fetchArticles: builder.query<ArticlesResponse, QueryParams>({
      query: ({ page, term }: QueryParams) =>
        `?q=${term}&fq=source:("The New York Times")&page=${page}&api-key=${apiKey}`,
    }),
  }),
});

export const { useFetchArticlesQuery } = nytArticlesSearchApi;
