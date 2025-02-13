import { createRouter, createWebHistory } from 'vue-router';
import MainLayout from "../components/layout/MianLayout.vue";
import Main from "../pages/Main.vue";
import Captcha from "../pages/Captcha.vue";
import Pagination from "../pages/Pagination.vue";
import Calendar from "../pages/Calendar.vue";
import Map from "../pages/Map.vue";
import SwiperPage from "../pages/SwiperPage.vue";
import ToastPage from "../pages/ToastPage.vue";
import InputDate from "../pages/InputDate.vue";
import VueDatePicker from "../pages/VueDatePicker.vue";
import EmptyPage from "../pages/EmptyPage.vue";
import SocialLogin from "../pages/SocialLogin.vue";
import NaverLoginCallback from "../pages/NaverLoginCallback.vue";
import NetworkErrorPage from "../pages/NetworkErrorPage.vue";

const title = process.env.VUE_APP_TITLE;

const routes = [
    {
        path: '/', component: MainLayout,
        children: [
            {
                path: '', component: Main
            },
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
            },
            {
                path: 'social-login', component: SocialLogin,
                meta: { title: `${title} | 소셜 로그인` }
            },
        ],
    },
    {
        path: '/naver-login-callback', component: NaverLoginCallback
    },
    { path: '/error-network', component: NetworkErrorPage },
    { path: '/:pathMatch(.*)*', component: EmptyPage }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

router.afterEach((to) => {
    document.title = to.meta.title || title;
});

export default router;