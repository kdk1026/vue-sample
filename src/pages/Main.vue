<template>
    <div>
        <Header />
        <h2 v-if="pathname === '/'">메인</h2>
        <router-view v-else></router-view>
    </div>
</template>

<script setup>
import Header from "../components/layout/Header.vue";

    const pathname = window.location.pathname;
</script>

<style scoped>

</style>