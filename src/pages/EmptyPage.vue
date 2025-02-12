<template>
    <div>
        <h2 class="msg">잘못된 접근입니다.</h2>
        <router-link to="/" class="btn">돌아가기</router-link>
    </div>
</template>

<script setup>

</script>

<style scoped>
    .msg {
        color: #ff0000;
        text-align: center;
        font-size: 24px;
        margin-top: 20px;
    }

    .btn {
        display: block;
        width: 100%;
        padding: 10px 0;
        margin-top: 20px;
        text-align: center;
        background-color: #007bff;
        color: #fff;
        text-decoration: none;
        border-radius: 5px;
        box-sizing: border-box;
    }
</style>