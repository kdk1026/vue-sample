<template>
    <div :style="{width: '950px'}">
        <swiper
            :modules="[Navigation, Pagination, Scrollbar, A11y, Autoplay]"
            :spaceBetween="50"
            :slidesPerView="1"
            :navigation="true"
            :pagination="{ clickable: true }"
            :scrollbar="{ draggable: true }"
            :autoplay="{ delay: 2500, disableOnInteraction: false }"
            @swiper="onSwiper"
        >
            <swiper-slide v-for="index in slides" :key="index" :virtualIndex="index">
                <img :src="`https://picsum.photos/950/250?random=${index + 1}`" alt="Swiper 이미지" />
            </swiper-slide>
        </swiper>
    </div>
    <div class="btnWrap">
        <button @click="handlePlay">{{ isPlay ? '종료' : '시작' }}</button>
    </div>
</template>

<script setup>
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/virtual';
import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

    const slides = 5;

    const mySwiper = ref(null);
    const isPlay = ref(true);

    const onSwiper = (swiper) => {
        mySwiper.value = swiper;
    };

    const handlePlay = () => {
        isPlay.value ? mySwiper.value.autoplay.stop() : mySwiper.value.autoplay.start();
        isPlay.value = !isPlay.value;
    };
</script>

<style scoped>
.btnWrap {
    position: absolute;
    top: 250px;
    z-index: 1;
    left: 530px;
}
</style>