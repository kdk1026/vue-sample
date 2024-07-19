<template>
    <div>
        <div>
            <img :src="imageData" alt="Captcha" />
            <div id="captchaAudio" :style="'display: none;'"></div>
        </div>
        <div>
            <button @click="handleListen">음성듣기</button>
            <button @click="handleRefresh">새로고침</button>
        </div>
    </div>
</template>

<script setup>
    const props = defineProps({
        imageData: String,
        handleListen: Function,
        handleRefresh: Function
    });
</script>

<style scoped>

</style>