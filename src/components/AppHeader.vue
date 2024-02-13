<script>
import { store } from "../store";

export default {
    name: 'AppHeader',
    data() {
        return {
            store
        };
    }
}
</script>


<template>
    <input type="text" placeholder="Binge something..." v-model="store.searchMovie">
    <button type="button" @click.prevent="$emit('performSearch')">Cerca</button>
</template>


<style lang="scss" scoped>
@use "../styles/general.scss" as *;
</style>