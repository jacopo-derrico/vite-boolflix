import { reactive } from "vue";

export const store = reactive({
    searchMovie: '',
    loading: false,
    searchList: [],
    apiKey: '8766d6b6b214fc613264d11608cc2b52',
    apiUrl: 'https://api.themoviedb.org/3/search/movie?api_key=8766d6b6b214fc613264d11608cc2b52&language=it_IT',
})