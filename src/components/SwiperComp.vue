<template>
    <button 
        v-if="isButton"
        ref="closeButtonRef" @click="handlePlay">{{ isPlay ? '종료' : '시작' }}</button>
    <swiper
        :modules="[Navigation, Pagination, Scrollbar, A11y, Autoplay]"
        :spaceBetween="50"
        :slidesPerView="1"
        :navigation=isNavi
        :pagination="isPagination ? { clickable: true } : false"
        :scrollbar="isScrollbar ? { draggable: true } : false"
        :autoplay="{ delay: 2500, disableOnInteraction: false }"
        @swiper="onSwiper"
    >
        <swiper-slide v-for="index in slideContent" :key="index" :virtualIndex="index">
            <img :src="`https://picsum.photos/950/250?random=${index + 1}`" alt="Swiper 이미지" />
        </swiper-slide>
    </swiper>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/virtual';

const props = defineProps({
    slideContent: Array,
    isNavi: Boolean,
    isButton: Boolean,
    isPagination: Boolean,
    isScrollbar: Boolean
});

const mySwiper = ref(null);
const isPlay = ref(true);
const closeButtonRef = ref(null);

const onSwiper = (swiper) => {
    mySwiper.value = swiper;
};

const handlePlay = () => {
    isPlay.value ? mySwiper.value.autoplay.stop() : mySwiper.value.autoplay.start();
    isPlay.value = !isPlay.value;
};

onMounted(() => {
    const pagination = document.querySelector('.swiper-pagination');
    if (pagination && closeButtonRef.value) {
        pagination.appendChild(closeButtonRef.value);  
    }
});

watch(isPlay, (newVal) => {
    if (newVal) {
        const pagination = document.querySelector('.swiper-pagination'); 
        if (pagination && closeButtonRef.value) {
            pagination.appendChild(closeButtonRef.value);  
        }
    }
});
</script>

<style lang="scss" scoped>

</style>