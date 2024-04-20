<script setup>
import Navigation from './Navigation.vue';
</script>

<template>
    <div class="container">
        <div class="header">
            <div class="header-logo">
                <img src="../assets/images/Logo.svg" alt="">
            </div>
            <Navigation></Navigation>
        </div>
    </div>
</template>

<style scoped lang='scss'>
.header{
    display: flex;
    align-items: center;
    justify-content: space-between;
}
</style>