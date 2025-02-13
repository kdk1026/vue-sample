<template>
    <div>
        <h2 class="msg">Network Error</h2>
        <router-link to="/" class="btn">돌아가기</router-link>
    </div>
</template>

<script setup>

</script>

<style scoped>
    .msg {
        color: #ff6f61;
        font-family: Arial, sans-serif;
        text-align: center;
        margin-top: 20px;
    }

    .btn {
        display: block;
        text-align: center;
        margin-top: 20px;
        text-decoration: none;
        color: #ffffff;
        background-color: #ff6f61;
        padding: 10px 20px;
        border-radius: 5px;
        font-family: Arial, sans-serif;
    }
</style>