<template>
    <div class="flex-col">
        <!-- <figure>
            <img :src="propsImg" :alt="propsName">
        </figure> -->
        <h4>{{ propsTitle }}</h4>
        <h6>{{ propsOgTitle }}</h6>
        <div>
            <span class="lang-icon" :class="{ [`lang-icon-${propsLang}`]: true }"></span>
            <span>{{ propsScore }}</span>
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
        propsScore: Number
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