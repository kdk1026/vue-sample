<template>
    <VueFinalModal>
        <div class="container">
            <button @click="emit('close')">닫기</button>  
            <div class="title">
                <h3>
                    {{selectedYear}}년 {{selectedMonth}}월
                </h3>
                <div class="pagination">
                    <button @click="prevMonth">◀︎</button>
                    <button @click="nextMonth">▶</button>
                </div>
            </div>
            <div class="week">
                <div v-for="v in week" :key="v" :class="{
                    'weekday': true,
                    'sunday': v === '일',
                    'saturday': v === '토'
                }">
                    {{v}}
                </div>
            </div>
            <div class="date">
                <template v-for="nowDay of week" :key="nowDay">
                    <template v-if="week[day] === nowDay">
                        <div v-for="(k,i) in dateTotalCount" :key="i+1" :class="{
                            // 오늘 날짜일 때 표시할 스타일
                            'today': today.year === selectedYear && today.month === selectedMonth && today.date === i + 1,
                            // 전체 날짜 스타일
                            'weekday': true,
                            // 전체 일요일 스타일
                            'sunday': new Date(selectedYear, selectedMonth - 1, i + 1).getDay() === 0,
                            // 전체 토요일 스타일
                            'saturday': new Date(selectedYear, selectedMonth - 1, i + 1).getDay() === 6,
                            // 선택 날짜 스타일
                            'selected': selectedDate === getDisplayStrDate(i),
                            // 선택 불가 날짜 스타일
                            'impossible': getDisplayStrDate(i) < todayStrDate || getDisplayStrDate(i) > afterStrDate
                        }" :data-date="getDisplayStrDate(i)" @click="selectDate(getDisplayStrDate(i), todayStrDate, afterStrDate)">
                            {{i + 1}}
                        </div>
                    </template>
                    <template v-else>
                        <div class="weekday">

                        </div>
                    </template>
                </template>
            </div>
            <button @click="emit('close')">취소</button>
            <button @click="emit('confirm', selectedDate)">적용</button>
        </div>
    </VueFinalModal>
</template>

<script setup>
import { computed, ref } from 'vue';
import { VueFinalModal } from 'vue-final-modal'
import { Today, Convert, CalcDate } from "../utils/date";

    const emit = defineEmits(
        ['confirm', 'close']
    );

    const now = new Date();

    const today = {
        year: now.getFullYear(),
        month: now.getMonth() + 1,
        date: now.getDate(),
        day: now.getDay()
    };

    const week = ["일", "월", "화", "수", "목", "금", "토"];

    const selectedYear = ref(today.year);
    const selectedMonth = ref(today.month);
    const dateTotalCount = ref(new Date(selectedYear.value, selectedMonth.value, 0).getDate());

    const selectedDate = ref("");

    const todayStrDate = Today.getTodayString();
    const afterStrDate = CalcDate.plusMinusDay(31);

    const day = ref(new Date(selectedYear.value, selectedMonth.value - 1, 1).getDay());

    const getDisplayStrDate = ((i) => {
        const date = new Date(selectedYear.value, selectedMonth.value - 1, i + 1);
        const strDate = Convert.getDateToStringFormat(date, "YYYYMMDD");
        return strDate;
    });

    const prevMonth = (() => {
        if ( selectedMonth.value === 1 ) {
            selectedMonth.value = 12;
            selectedYear.value = selectedYear.value - 1;
        } else {
            selectedMonth.value = selectedMonth.value - 1;
        }

        selectedDate.value = "";

        dateTotalCount.value = new Date(selectedYear.value, selectedMonth.value, 0).getDate();
        day.value = new Date(selectedYear.value, selectedMonth.value - 1, 1).getDay();
    });

    const nextMonth = (() => {
        if ( selectedMonth.value === 1 ) {
            selectedMonth.value = 1;
            selectedYear.value = selectedYear.value + 1;
        } else {
            selectedMonth.value = selectedMonth.value + 1;
        }

        selectedDate.value = "";

        dateTotalCount.value = new Date(selectedYear.value, selectedMonth.value, 0).getDate();
        day.value = new Date(selectedYear.value, selectedMonth.value - 1, 1).getDay();
    });

    const selectDate = (strDate, todayStrDate, afterStrDate) => {
        if ( strDate < todayStrDate || strDate > afterStrDate ) {
            return false;
        }

        selectedDate.value = strDate;
    };
</script>

<style scoped>
@import "../assets/css/calendar.css";
</style>