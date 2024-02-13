<script>
import AppComponent from './components/AppComponent.vue';

import { store } from "./store";

export default {
    components: {
        AppComponent
    },
}
</script>


<template>
<AppComponent/>
</template>


<style lang="scss">
@use "./styles/general.scss" as *;
</style>
