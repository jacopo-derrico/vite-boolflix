<script>
import AppMovieCard from './AppMovieCard.vue'
import axios from 'axios';
import { store } from "../store";
export default {
    name: 'AppDashboard',
    components: {
        AppMovieCard
    },
    data() {
        return {
            store
        };
    },
}
</script>

<template>
    <div class="flex flex-wrap">
        <AppMovieCard v-for="(movie, index) in store.searchResult" :key="index" :propsTitle="movie.title || movie.name"
            :propsOgTitle="movie.original_title || movie.original_name" :propsLang="movie.original_language"
            :propsScore="movie.vote_average" :propsImg="movie.poster_path" />
    </div>
</template>


<style lang="scss" scoped>
@use "../styles/general.scss" as *;
</style>