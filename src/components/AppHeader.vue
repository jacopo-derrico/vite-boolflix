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
    <header class="flex align-center justify-between">
        <nav class="flex align-center justify-between col-8 m-center">
            <div>
                <h1>BoolFlix</h1>
            </div>
            <div id="searchBar" class="flex align-center justify-end">
                <div class="icon flex align-center justify-center">
                    <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
                </div>
                <input type="text" id="searchFilm" placeholder="Binge something..." v-model="store.searchMovie"
                    @input="$emit('performSearch')">
            </div>
        </nav>
    </header>
    <nav class="flex justify-center">
        <ul class="flex justify-between">
            <li v-for="(element, index) in store.menuList" :key="index"
                :class="(store.currentList == element.type) ? 'active' : ''"
                @click="(store.currentList = element.type), $emit('changeList')">{{ element.name }}</li>
        </ul>
    </nav>
</template>


<style lang="scss" scoped>
@use "../styles/general.scss" as *;

header {
    margin-top: 30px;
    padding-block: 10px;

    h1 {
        color: white;
    }

    #searchBar {
        width: 70%;
    }
}

nav {
    color: #ffffff44;
    margin-left: 30px;
    margin-block: 20px;
}

ul {
    gap: 40px;
}

li {
    cursor: pointer;
    text-transform: uppercase;

    &:hover {
        color: white;
    }
}

.active {
    color: white;
}


.icon {
    padding-right: 15px;
    color: #ffffff6d;
    background-color: #121212;
    border: 1px solid #ffffff44;
    border-right: none;
    border-radius: 5px 0 0 5px;
    height: 30px;
    padding-left: 10px;
}

input {
    background-color: #121212;
    color: white;
    border: 1px solid #ffffff44;
    border-radius: 0 5px 5px 0;
    padding-left: 10px;
    height: 30px;
    width: 140px;
    transition: width 0.6s ease-in-out;

    &:focus {
        width: 50%;
        outline: none;
    }
}
</style>