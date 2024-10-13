<template>
    <div style="display: flex; flex-direction: row; align-items: center; margin-left: 50px;">
        <div style="display: flex; align-items: center;">
            <DatePickerComp
                :defaultDate="startDate"
                @setDefaultDate="handleStartDateChange"
                ref="startDatePickerRef"
            />
            <button
                style="margin-left: 10px; cursor: pointer;"
                @click="handleStartButtonClick"
            >
                달력
            </button>

            <div style="margin-left: 10px; margin-right: 10px;"> ~ </div>

            <DatePickerComp
                :defaultDate="endDate"
                @setDefaultDate="handleEndDateChange"
                :isOpen="isEndOpen"
                ref="endDatePickerRef"
            />
            <button
                style="margin-left: 10px; cursor: pointer;"
                @click="handleEndButtonClick"
            >
                달력
            </button>
        </div>

        <div style="margin-left: 10px; margin-right: 10px;">
            <button @click="handleConfirmClick">콘솔 확인</button>
        </div>

        <div style="margin-left: 10px;">
            <button @click="handleMonthClick(1)">1개월</button>
        </div>
        <div style="margin-left: 10px;">
            <button @click="handleMonthClick(3)">3개월</button>
        </div>
        <div style="margin-left: 10px;">
            <button @click="handleMonthClick(6)">6개월</button>
        </div>

        <div style="margin-left: 10px;">
            <button @click="handleResetClick">초기화</button>
        </div>
    </div>
</template>

<script setup>
import { Convert } from "@/utils/date";
import { ref } from "vue";
import DatePickerComp from "../components/DatePickerComp.vue";

    const today = new Date();

    const startDate = ref(new Date(today.setDate(today.getDate() - 7)));
    const endDate = ref(new Date());

    const handleStartDateChange = (newDate) => {
        startDate.value = newDate;
    };

    const handleEndDateChange = (newDate) => {
        endDate.value = newDate;
    };

    const startDatePickerRef = ref(null);
    const endDatePickerRef = ref(null);

    const handleStartButtonClick = () => {
        if ( startDatePickerRef.value ) {
            const inputElement = startDatePickerRef.value.$el.querySelector('input[data-test="dp-input"]');
            if (inputElement) {
                inputElement.click();
            }
        }
    };

    const handleEndButtonClick = () => {
        if ( endDatePickerRef.value ) {
            const inputElement = endDatePickerRef.value.$el.querySelector('input[data-test="dp-input"]');
            if (inputElement) {
                inputElement.click();
            }
        }
    };

    const handleConfirmClick = () => {
        console.log("시작일: ", startDate.value);
        console.log("종료일: ", endDate.value);

        console.log("시작일: ", Convert.getDateToString(startDate.value));
        console.log("종료일: ", Convert.getDateToString(endDate.value));
    };

    const handleMonthClick = (month) => {
        const today = new Date();
        startDate.value = new Date(today.setMonth(today.getMonth() - month));
        endDate.value = new Date();
    };

    const handleResetClick = () => {
        const today = new Date();
        startDate.value = new Date(today.setDate(today.getDate() - 7));

        endDate.value = new Date();
    };
</script>

<style lang="scss" scoped>

</style>