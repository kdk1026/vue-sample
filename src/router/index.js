import { createRouter, createWebHistory } from 'vue-router';
import Main from "../pages/Main.vue";
import Captcha from "../pages/Captcha.vue";
import Pagination from "../pages/Pagination.vue";
import Calendar from "../pages/Calendar.vue";
import Map from "../pages/Map.vue";
import SwiperPage from "../pages/SwiperPage.vue";
import ToastPage from "../pages/ToastPage.vue";
import InputDate from "../pages/InputDate.vue";
import VueDatePicker from "../pages/VueDatePicker.vue";

const routes = [
    {
        path: '/', component: Main,
        children: [
            {
                path: 'captcha', component: Captcha
            },
            {
                path: 'pagination', component: Pagination
            },
            {
                path: 'calendar', component: Calendar
            },
            {
                path: 'map', component: Map
            },
            {
                path: 'swiper', component: SwiperPage
            },
            {
                path: 'toast', component: ToastPage
            },
            {
                path: 'inpput-date', component: InputDate
            },
            {
                path: 'datepicker', component: VueDatePicker
            }
        ]
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;