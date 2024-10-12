<template>
    <div className="pagination">
        <a href="javascript:void(0)" @click="handlePage(1, 'first')">&laquo;</a>
        <a href="javascript:void(0)" @click="handlePage(data.paging?.prevBlockPage, 'prev')">&#60;</a>
        <a v-for="i in data.paging?.lastPage" :key="i" :class="{'active': i === data.paging?.currentPage}" @click="handleClickPage(i)">
            {{i}}
        </a>
        <a href="javascript:void(0)" @click="handlePage(data.paging?.nextBlockPage, 'next')">&#62;</a>
        <a href="javascript:void(0)" @click="handlePage(data.paging?.totalPage, 'last')">&raquo;</a>
    </div>
</template>

<script setup>
import { onMounted } from "vue";

    const props = defineProps({
        data: Object,
        handlePage: Function
    });

    const handleClickPage = (page) => {
        if ( page === props.data.paging?.currentPage ) {
            return false;
        } else {
            props.handlePage(page);
        }
    };
</script>

<style scoped>
@import "../assets/css/pagination.css";
</style>