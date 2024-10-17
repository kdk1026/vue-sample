<template>
    <div>
        <SwiperComp
            :slideContent="slides"
            :isNavi="true"
            :isButton="true"
            :isPagination="true"
            :isScrollbar="true"
        />
    </div>
</template>

<script setup>
import SwiperComp from "../components/SwiperComp.vue";

const slides = 5;
</script>

<style scoped>
    
</style>