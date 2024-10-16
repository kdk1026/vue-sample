<template>
    <div>

    </div>
</template>

<script setup>
import { loginWithNaverCallBack } from "@/utils/socialLogin";
import { onMounted, ref } from "vue";

const naverClientId = process.env.VUE_APP_NAVER_CLIENT_ID;
const naverCallbackUrl = `${process.env.VUE_APP_FRONT_URL}/naver-login-callback`;
const naverLoginCallBack = ref(null);

naverLoginCallBack.value = () => {
    const naverLogin = loginWithNaverCallBack(naverClientId, naverCallbackUrl);

    window.addEventListener('load', function () {
        naverLogin.getLoginStatus(function (status) {
            if (status) {
                // 필수적으로 받아야하는 프로필 정보가 있다면 callback처리 시점에 체크
                const email = naverLogin.user.getEmail();

                const profileObj = {};
                profileObj.email = email;

                window.opener.postMessage(profileObj, window.location.origin);
                window.close();
            } else {
                console.log("callback 처리에 실패하였습니다.");
            }
        });
    });
};

onMounted(() => {
    naverLoginCallBack.value();
});
</script>

<style lang="scss" scoped>

</style>