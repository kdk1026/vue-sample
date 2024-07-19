<template>
    <button @click="notify">Toast 기본</button>
    <button @click="success">Toast Success</button>
    <button @click="error">Toast Error</button>
    <button @click="warning">Toast Warning</button>
</template>

<script setup>
import { useToast } from "vue-toast-notification";
import 'vue-toast-notification/dist/theme-sugar.css';

    const $toast = useToast();

    const option = {
        position: 'top', // 알림 위치 지정
        duration: 5000, // 자동 off 시간
        dismissible: true, // 클릭으로 알람 닫기 (default : true)
        pauseOnHover: true, // 마우스를 올리면 알람 정지 (default : true)
        //queue: true
    };

    const notify = () => {
        $toast.default('toast test!', option);
    };

    const success = () => {
        $toast.success('toast success!', option);
    };

    const error = () => {
        $toast.error('toast error!', option);
    };

    const warning = () => {
        $toast.warning('toast warning!', option);
    };
</script>

<style scoped>

</style>