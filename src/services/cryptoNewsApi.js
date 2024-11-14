import {createApi , fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const cryptoNewsHeaders = {
    
        'X-BingApis-SDK': 'true',
        'X-RapidAPI-Key': '060d46ce87msh1640932528e5a89p185747jsn28ccc738a055',
        'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
    
}

const baseUrl = "https://bing-news-search1.p.rapidapi.com";

const createRequest = (url) => ({url,headers: cryptoNewsHeaders})


export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery:fetchBaseQuery({baseUrl}),
    endpoints: (builder) => ({
        getCryptoNews: builder.query({
            query: ({newsCategory , count}) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
        })
    })
});

export const {
    useGetCryptoNewsQuery,

} = cryptoNewsApi;