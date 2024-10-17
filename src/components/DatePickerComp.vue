<template>
  <div>
    <VueDatePicker
      v-model="selectedDate"
      :enable-time-picker="false"
      locale="ko-KR"
      :format="'yyyy-MM-dd'"
      :year-range="[minYear, maxYear]"
    >
      <template v-slot:action-row="{ selectDate }">
        <button @click="handleTodayClick(selectDate)">오늘</button>
        <button @click="selectDate">선택</button>
      </template>
    </VueDatePicker>
  </div>
</template>

<script setup>
import { nextTick, ref, watch } from "vue";
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

const minYear = new Date().getFullYear() - 10;
const maxYear = new Date().getFullYear() + 10;

const props = defineProps({
    defaultDate: Date,
});

const emit = defineEmits([
  'setDefaultDate'
]);

const selectedDate = ref(props.defaultDate);

const handleTodayClick = (selectDate) => {
  selectedDate.value = new Date();
  nextTick(() => {
    selectDate();
  });
};

watch(selectedDate, (newValue) => {
  emit('setDefaultDate', newValue);
});

watch(() => props.defaultDate, (newDate) => {
  selectedDate.value = newDate;
});
</script>

<style lang="scss" scoped>

</style>