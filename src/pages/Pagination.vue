<template>
    <div>
        <CommonPagination
            :data="data"
            :handlePage="handlePage"
        />
    </div>
</template>

<script setup>
import { onMounted, ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import CommonPagination from "../components/CommonPagination.vue";
import axios from "axios";

    const route = useRoute();
    const params = route.query;

    const page = ref(params.page);
    const data = ref([]);

    const router = useRouter();
    const pathname = window.location.pathname;

    const fetchData = async () => {
        const res = await axios.get(`${process.env.VUE_APP_API_URL}/page?currentPage=${page.value}`);
        data.value = res.data;
    };

    onMounted(() => {
        if ( !page.value ) {
            page.value = '1';
        }
        fetchData();
    });

    watch(page, () => {
        router.push({
            path: pathname,
            query: {
                page: page.value,
            }
        });  
    });

    const handlePage = (currentPage, type) => {
        if ( data.paging?.firstPage === 1 && type === 'first' ) {
            return false;
        }

        if ( data.paging?.firstPage === 1 && type === 'prev') {
            return false;
        }

        if ( data.paging?.lastPage === data.paging?.totalPage && type === 'next' ) {
            return false;
        }

        if ( data.paging?.lastPage === data.paging?.totalPage && type === 'last' ) {
            return false;
        }

        page.value = currentPage;
    };
</script>

<style scoped>

</style>