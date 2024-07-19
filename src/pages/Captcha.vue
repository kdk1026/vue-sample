<template>
    <div>
        <CommonCaptcha
            :imageData="imageData"
            :handleListen="handleListen"
            :handleRefresh="handleRefresh"
        />
    </div>
</template>

<script setup>
import { onMounted, ref, watch } from "vue";
import CommonCaptcha from "../components/CommonCaptcha.vue";

    const imageData = ref(null);
    const rand = ref(String(Math.floor(Math.random()*1000000)).padStart(6, "0"));

    const setImageData = () => {
        imageData.value = `${process.env.VUE_APP_API_URL}/captcha-img/${rand.value}`;
    };

    onMounted(() => {
        setImageData();
    });

    watch(rand, () => {
        setImageData();
    });

    const handleListen = () => {
        const url = `${process.env.VUE_APP_API_URL}/captcha-audio/${rand.value}`;
        new Audio(url).play();
    };

    const handleRefresh = () => {
        const newRand = String(Math.floor(Math.random()*1000000)).padStart(6, "0");
        rand.value = newRand;
    };
</script>

<style scoped>

</style>