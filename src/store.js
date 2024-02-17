import { reactive } from "vue";

export const store = reactive({
    searchMovie: '',
    loading: false,
    searchResult: [],
    apiKey: '8766d6b6b214fc613264d11608cc2b52',
    apiUrl: 'https://api.themoviedb.org/3/search/multi?api_key=8766d6b6b214fc613264d11608cc2b52&language=it_IT',
    teaserKey: '',
    showTrailer: false,
    trailerInfo: {},
    infoHover: false,
    castInfo: [],
    tvGenres: [],
    moviesGenres: [],
    singleMovieGenres: [],
    currentList: 'all',
    menuList: [
        {
            name: 'Home',
            type: 'all',
            status: true
        },
        {
            name: 'Movies',
            type: 'movie',
            status: false
        },
        {
            name: 'TV Series',
            type: 'tv',
            status: false
        }
    ]
})