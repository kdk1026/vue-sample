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
import { useApi } from "@/composition/useApi";
import { fetchPageData } from "@/apis/test";

    const route = useRoute();
    const params = route.query;

    const page = ref(params.page||'1');
    const data = ref([]);

    const router = useRouter();
    const pathname = window.location.pathname;

    const { apiData: pageData, callApi: fetchPageDataApi } = useApi(fetchPageData, [page.value], false);

    onMounted(() => {
        fetchPageDataApi();
    });

    watch(page, (newPage) => {
        fetchPageDataApi([newPage]);
    });

    watch(pageData, (newPageData) => {
        data.value = newPageData;
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
        if ( data.value.paging?.firstPage === 1 && type === 'first' ) {
            return false;
        }

        if ( data.value.paging?.firstPage === 1 && type === 'prev') {
            return false;
        }

        if ( data.value.paging?.lastPage === data.value.paging?.totalPage && type === 'next' ) {
            return false;
        }

        if ( data.value.paging?.lastPage === data.value.paging?.totalPage && type === 'last' ) {
            return false;
        }

        page.value = currentPage;
    };
</script>

<style scoped>

</style>