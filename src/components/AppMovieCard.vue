<template>
    <div class="flex-col">
        <figure>
            <img :src="`https://image.tmdb.org/t/p/w342${propsImg}`" :alt="propsTitle">
        </figure>
        <h4>{{ propsTitle }}</h4>
        <h6>{{ propsOgTitle }}</h6>
        <div>
            <span class="lang-icon" :class="{ [`lang-icon-${propsLang}`]: true }"></span>
            <span>{{ Math.ceil(propsScore / 2) }}</span>
            <font-awesome-icon icon="fa-solid fa-star" v-for="element in Math.ceil(propsScore / 2)"/>
            <font-awesome-icon icon="fa-regular fa-star" v-for="element in (5 - Math.ceil(propsScore / 2))"/>
            <span>Reviews: {{ propsScoreCount }}</span>
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
</style>