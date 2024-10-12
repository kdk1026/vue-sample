<template>
    <div style="display: flex; flex-direction: row; align-items: center; margin-left: 50px;">
        <div style="display: flex; align-items: center;">
            <input
                ref="startDatePickerRef"
                type="date"
                :value="startDate"
                @change="handleStartDateChange"
                :min="minDate"
                :max="maxDate"
            />
            <button
                style="margin-left: 10px; cursor: pointer;"
                @click="handleStartButtonClick"
            >
                달력
            </button>

            <div style="margin-left: 10px; margin-right: 10px;"> ~ </div>

            <input
                ref="endDatePickerRef"
                type="date"
                :value="endDate"
                @change="handleEndDateChange"
                :min="minDate"
                :max="maxDate"
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
import { CalcDate, Convert } from "@/utils/date";
import { ref } from "vue";

    const today = new Date();

    const startDate = ref(Convert.getDateToStringFormat(new Date(today.setDate(today.getDate() - 7)), 'YYYY-MM-DD'));
    const endDate = ref(Convert.getDateToStringFormat(new Date(), 'YYYY-MM-DD'));

    const handleStartDateChange = (e) => {
        startDate.value = e.target.value;
    };

    const handleEndDateChange = (e) => {
        endDate.value = e.target.value;
    };

    const startDatePickerRef = ref(null);
    const endDatePickerRef = ref(null);

    const handleStartButtonClick = () => {
        if ( startDatePickerRef.value ) {
            startDatePickerRef.value.showPicker();
        }
    };

    const handleEndButtonClick = () => {
        if ( endDatePickerRef.value ) {
            endDatePickerRef.value.showPicker();
        }
    };

    const handleConfirmClick = () => {
        console.log("시작일: ", startDate.value);
        console.log("종료일: ", endDate.value);

        console.log("시작일: ", startDate.value.replace(/-/g, ""));
        console.log("종료일: ", endDate.value.replace(/-/g, ""));
    };

    const handleMonthClick = (month) => {
        const today = new Date();
        startDate.value = Convert.getDateToStringFormat(new Date(today.setMonth(today.getMonth() - month)), 'YYYY-MM-DD');
        endDate.value = Convert.getDateToStringFormat(new Date(), 'YYYY-MM-DD');
    };

    const handleResetClick = () => {
        const today = new Date();
        startDate.value = Convert.getDateToStringFormat(new Date(today.setDate(today.getDate() - 7)), 'YYYY-MM-DD');
        endDate.value = Convert.getDateToStringFormat(new Date(), 'YYYY-MM-DD');
    };

    const minDate = CalcDate.plusMinusYearFormat(-10, 'YYYY-MM-DD');
    const maxDate = CalcDate.plusMinusYearFormat(10, 'YYYY-MM-DD');
</script>

<style lang="scss" scoped>

</style>