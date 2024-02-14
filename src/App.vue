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
            if (store.searchMovie === '') {
                axios
                    .get(`https://api.themoviedb.org/3/trending/all/day?api_key=8766d6b6b214fc613264d11608cc2b52&language=it-IT`)
                    .then(res => {
                        store.searchResult = res.data.results
                        store.loading = false
                        console.log(res.data.results)
                    })
            } else {
                axios
                    .get(`https://api.themoviedb.org/3/search/multi?api_key=8766d6b6b214fc613264d11608cc2b52&query=${store.searchMovie}`)
                    .then(res => {
                        store.searchResult = res.data.results
                        store.loading = false
                        console.log(res.data.results)
                    })
            }
        }
    },
    mounted() {
        this.getMovies()
    },
}
</script>


<template>
    <AppHeader @performSearch="getMovies" />
    <AppDashboard />
</template>


<style lang="scss">
@use "./styles/general.scss" as *;
</style>
