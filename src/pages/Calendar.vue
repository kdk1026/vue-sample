<template>
    <div>
        <button @click="() => open()">
            Modal Open
        </button>

        <ModalsContainer />

        <div v-if="selectedDate">
            선택한 날짜 : {{selectedDate}}
        </div>
    </div>
</template>

<script setup>
import 'vue-final-modal/style.css';
import { ModalsContainer, useModal } from 'vue-final-modal';
import CommonCalendar from "../components/CommonCalendar.vue";
import { ref } from 'vue';

    const selectedDate = ref("");

    const { open, close } = useModal({
        component: CommonCalendar,
        attrs: {
            onConfirm(strDate) {
                handleModalClose(strDate);
            },
            onClose() {
                close();
            }
        }
    });

    const handleModalClose = (strDate) => {
        close();
        selectedDate.value = strDate;
    };
</script>

<style scoped>

</style>