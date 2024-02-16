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
        getTrailer(id, type, title, overview) {

            store.trailerInfo = { title: title, overview: overview };
            console.log(store.trailerInfo);
            console.log(id, type);
            store.showTrailer = true;

            if (type === undefined) {
                type = 'tv'
            }
            console.log(id, type);
            axios
                .get(`https://api.themoviedb.org/3/${type}/${id}/videos?api_key=8766d6b6b214fc613264d11608cc2b52&language=it_IT"`)
                .then(res => {
                    res.data.results.some(link => {
                        if (link.site == 'YouTube' && (link.type == 'Teaser' || link.type == 'Trailer')) {
                            store.teaserKey = link.key
                            return true
                        }
                    })
                })
                .catch(error => {
                    console.error('Error fetching trailers:', error);
                });
        },
        cleanTrailer() {
            store.showTrailer = false;
            store.trailerInfo = {};
            store.teaserKey = '';
        },
        mouseOverInfo(){
            store.infoHover = !store.infoHover; 
    },
}}
</script>

<template>
    <div id="cards" class="flex flex-wrap col-8 m-center">
        <AppMovieCard v-for="(movie, index) in store.searchResult" :key="index" :propsTitle="movie.title || movie.name"
            :propsOgTitle="movie.original_title || movie.original_name" :propsLang="movie.original_language"
            :propsScore="movie.vote_average" :propsImg="movie.poster_path" :propsScoreCount="movie.vote_count"
            @click="getTrailer(movie.id, movie.media_type, (movie.title || movie.name), movie.overview)" />
        <div class="focusCard" :class="store.showTrailer ? 'visible' : 'hidden'">
            <font-awesome-icon icon="fa-solid fa-xmark" @click="cleanTrailer" />
            <div class="info"
                    @mouseover="mouseOverInfo"
                    @mouseleave="mouseOverInfo">
                <iframe type="text/html"
                    :src="`https://www.youtube.com/embed/${store.teaserKey}?autoplay=1&controls=0&disablekb=1&enablejsapi=1&fs=0&loop=1&modestbranding=1&iv_load_policy=3`"
                    frameborder="0"></iframe>
                <div id="overlay" :class="store.infoHover ? 'visible' : 'hidden'">
                    <div id="data" class="flex-column align-end">
                        <h2>{{ store.trailerInfo.title }}</h2>
                        <p>{{ store.trailerInfo.overview }}</p>
                    </div>
                </div>
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

    .fa-xmark {
        color: white;
        position: absolute;
        right: 8%;
        top: 7%;
        cursor: pointer;
    }

    .info {
        width: 80%;
        height: 80%;
        margin: 5% auto;
        position: relative;
    }

    iframe {
        object-fit: cover;
        width: 100%;
        height: 100%;
    }

    #overlay {
        position: absolute;
        width: 100%;
        height: 100%;
        bottom: 0;
        left: 0;
        height: 30%;
        background: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(255,255,255,0) 100%);
    }

    #data {
        color: white;
        padding: 30px;
        animation: fadeOut 3s ease-in-out;
        animation-fill-mode: forwards; 
        position: absolute;
        bottom: 0;
        width: 100%;

        h2 {
            font-size: 3rem;
            margin-bottom: 20px;
        }

        p {
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
        }

        @keyframes fadeOut {
            0% {
                opacity: 1;
            }

            100% {
                opacity: 0;
            }
        }
    }
}
</style>