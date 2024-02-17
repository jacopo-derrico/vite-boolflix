<script>
import axios from 'axios';
import { store } from "./store";
import AppHeader from './components/AppHeader.vue';
import AppDashboard from './components/AppDashboard.vue';

export default {
    components: {
        AppHeader,
        AppDashboard
    },
    data() {
        return {
            store
        }
    },
    methods: {
        getMovies() {
            store.loading = true;
            store.searchResult = []
            
            if (store.searchMovie == '') {
                axios
                    .get(`https://api.themoviedb.org/3/trending/${store.currentList}/week?api_key=5ab2b0cfcfeb10eeaa0adb6b3787dbee&query=`)
                    .then(res => {
                        console.log(res.data.results)
                        store.searchResult = res.data.results
                    })
            } else if (store.searchMovie !== '' && store.currentList == 'all') {
                axios
                    .get(`https://api.themoviedb.org/3/search/multi?api_key=5ab2b0cfcfeb10eeaa0adb6b3787dbee&query=${store.searchMovie}`)
                    .then(res => {
                        console.log(res.data.results)
                        store.searchResult = res.data.results
                    })
            } else {
                axios
                    .get(`https://api.themoviedb.org/3/search/${store.currentList}?api_key=5ab2b0cfcfeb10eeaa0adb6b3787dbee&query=${store.searchMovie}`)
                    .then(res => {
                        console.log(res.data.results)
                        store.searchResult = res.data.results
                    })
            }

        },
        getGenres() {
            axios
                .get(`https://api.themoviedb.org/3/genre/movie/list?api_key=8766d6b6b214fc613264d11608cc2b52`)
                .then(res => {
                    store.moviesGenres = res.data.genres
                    console.log(res.data.genres)
                });
            axios
                .get(`https://api.themoviedb.org/3/genre/tv/list?api_key=8766d6b6b214fc613264d11608cc2b52`)
                .then(res => {
                    store.tvGenres = res.data.genres
                    console.log(res.data.genres)
                });
        }
    },
    mounted() {
        this.getMovies();
        this.getGenres();
    },
}
</script>


<template>
    <AppHeader @performSearch="getMovies" @changeList="getMovies" />
    <AppDashboard />
</template>


<style lang="scss">
@use "./styles/general.scss" as *;
</style>
