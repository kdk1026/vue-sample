import { ref, watch, onMounted } from "vue";
import { useRouter } from "vue-router";

export function useApi(apiFunction, initialParams = [], callOnInit = true) {
    const router = useRouter();
    const apiParams = ref(initialParams);
    const apiData = ref(null);
    const apiPaging = ref(null);
    const prevParams = ref(null);

    const callApi = async (params = apiParams.value) => {
        if ( JSON.stringify(params) === JSON.stringify(prevParams.value) ) {
            return;
        }
        prevParams.value = params;
        try {
            const res = await apiFunction(...params);
            if ( res.data.list ) {
                apiData.value = res.data.list;
            } else if ( res.data.data ) {
                apiData.value = res.data.data;
            } else {
                apiData.value = res.data;
            }

            if ( res.data.paging ) {
                apiPaging.value = res.data.paging;
            }
            return res.data;
        } catch (error) {
            if (error.status === 999) {
                router.push("/error-network");
            }
            console.log(error);
            throw error;
        }
    };

    watch(() => initialParams, (newParams) => {
        if ( JSON.stringify(apiParams.value) !== JSON.stringify(newParams) ) {
            apiParams.value = newParams;
        }
    });

    if (callOnInit) {
        onMounted(() => {
            callApi(apiParams.value);
        });
    }

    return {
        apiData, apiPaging,
        callApi,
    };
}
