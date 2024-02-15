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
    methods: {
        getTrailer(id, type) {
            
            console.log(id, type);
            store.showTrailer = true
            axios
                .get(`https://api.themoviedb.org/3/${type}/${id}/videos?api_key=8766d6b6b214fc613264d11608cc2b52&language=it_IT"`)
                .then(res => {
                    res.data.results.forEach(link => {
                        if (link.site == 'YouTube' && link.type == 'Teaser' && link.official) {
                            store.teaserKey = link.key
                            return
                        }
                    })
                })
                .catch(error => {
                    console.error('Error fetching trailers:', error);
                });
        }
    },
}
</script>

<template>
    <div id="cards" class="flex flex-wrap col-8 m-center">
        <AppMovieCard v-for="(movie, index) in store.searchResult" :key="index" :propsTitle="movie.title || movie.name"
            :propsOgTitle="movie.original_title || movie.original_name" :propsLang="movie.original_language"
            :propsScore="movie.vote_average" :propsImg="movie.poster_path" :propsScoreCount="movie.vote_count"
            @click="getTrailer(movie.id, movie.media_type)" />
        <div class="focusCard" :class="store.showTrailer ? 'visible' : 'hidden'">
            <div class="info">
                <font-awesome-icon icon="fa-solid fa-xmark" />
                <iframe type="text/html"
                    :src="`https://www.youtube.com/embed/${store.teaserKey}?autoplay=1&controls=0&disablekb=1&enablejsapi=1&fs=0&loop=1&modestbranding=1&iv_load_policy=3`"
                    frameborder="0"></iframe>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
@use "../styles/general.scss" as *;

#cards {
    margin-top: 40px;
    gap: 20px;
    height: calc(100vh - 100px);
    overflow: scroll;
}

.focusCard {
    position: absolute;
    width: 100%;
    height: 100vh;
    transform: translate(-50%, -50%);
    top: 50vh;
    left: 50vw;
    z-index: 99;
    background-color: #00000060;

    .info {
        width: 80%;
        height: 80%;
        margin: 5% auto;
    }

    iframe {
        object-fit: cover;
        width: 100%;
        height: 100%;
    }
}
</style>