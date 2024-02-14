<template>
    <div class="card flex-col">
        <figure :class="(propsImg === null) ? 'empty' : ''">
            <img :class="(propsImg === null) ? 'hidden' : ''" :src="`https://image.tmdb.org/t/p/w342${propsImg}`">
        </figure>
        <div id="info" class="flex-col justify-end">
            <h4>{{ propsTitle }}</h4>
            <h6>{{ propsOgTitle }}</h6>
            <div>
                <div id="stars" class="flex justify-between">
                    <div>
                        <font-awesome-icon icon="fa-solid fa-star" v-for="element in Math.ceil(propsScore / 2)" />
                        <font-awesome-icon icon="fa-regular fa-star" v-for="element in (5 - Math.ceil(propsScore / 2))" />
                    </div>
                    <span>{{ Math.round((propsScore / 2) * 10) / 10 }}</span>
                </div>
                <div class="flex justify-between">
                    <span>Reviews: {{ propsScoreCount }}</span>
                    <span class="lang-icon" :class="{ [`lang-icon-${propsLang}`]: true }"></span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { store } from "../store";
export default {
    name: 'AppDashboard',
    props: {
        propsTitle: String,
        propsOgTitle: String,
        propsLang: String,
        propsScore: Number,
        propsImg: String,
        propsScoreCount: Number
    },
    data() {
        return {
            store
        };
    }
}
</script>

<style lang="scss" scoped>
@use "../styles/general.scss" as *;

.card {
    flex-basis: calc((100% / 6) - 20px + (20px / 6));
    color: #fff;
    position: relative;

    figure {
        width: 100%;

        img {
            aspect-ratio: 2/3;
        }
    }

    .empty {
        aspect-ratio: 2/3;
        background-color: #ffffff44;
        position: relative;

        &:before {
            content: 'No image';
            font-size: 25px;
            font-family: sans-serif;
            position: absolute;
            top: 50%;
            left: 18%;
        }
    }

    .hidden {
        display: none;
    }

    #info {
        display: none;
    }

    &:hover #info {
        display: flex;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;

        background-color: #00000080;

        padding: 10px;

        h4 {
            font-size: 1.2rem;
            margin-bottom: 5;
        }

        h6 {
            font-size: 0.6rem;
            margin-bottom: 10px;
        }

        #stars {
            margin-bottom: 10px;
        }
    }
}
</style>