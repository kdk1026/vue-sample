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

const title = process.env.VUE_APP_TITLE;

const routes = [
    {
        path: '/', component: Main,
        children: [
            {
                path: 'captcha', component: Captcha,
                meta: { title: `${title} | Captcha` }
            },
            {
                path: 'pagination', component: Pagination,
                meta: { title: `${title} | Pagination` }
            },
            {
                path: 'calendar', component: Calendar,
                meta: { title: `${title} | Calendar` }
            },
            {
                path: 'map', component: Map,
                meta: { title: `${title} | Naver Map` }
            },
            {
                path: 'swiper', component: SwiperPage,
                meta: { title: `${title} | Swiper` }
            },
            {
                path: 'toast', component: ToastPage,
                meta: { title: `${title} | Toast` }
            },
            {
                path: 'inpput-date', component: InputDate,
                meta: { title: `${title} | InputDate` }
            },
            {
                path: 'datepicker', component: VueDatePicker,
                meta: { title: `${title} | DatePicker` }
            }
        ]
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

router.afterEach((to) => {
    document.title = to.meta.title || title;
});

export default router;