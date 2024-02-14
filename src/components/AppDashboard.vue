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
    <div id="cards" class="flex flex-wrap col-8 m-center">
        <AppMovieCard v-for="(movie, index) in store.searchResult" :key="index" :propsTitle="movie.title || movie.name"
            :propsOgTitle="movie.original_title || movie.original_name" :propsLang="movie.original_language"
            :propsScore="movie.vote_average" :propsImg="movie.poster_path" :propsScoreCount="movie.vote_count" />
    </div>
</template>


<style lang="scss" scoped>
@use "../styles/general.scss" as *;

#cards{
    margin-top: 40px;
    gap: 20px;

}
</style>